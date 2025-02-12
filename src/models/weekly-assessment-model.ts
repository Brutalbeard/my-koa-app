import {
    DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import {sequelize} from '../utils/sequelize';

class WeeklyAssessment extends Model<InferAttributes<WeeklyAssessment>, InferCreationAttributes<WeeklyAssessment>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare thisWeekIWeighed: number;
    declare planningSelfRatingThisWeek: number;
    declare planningSelfRatingReason: string;
    declare waitingForHungerSelfRatingThisWeek: number;
    declare waitingForHungerSelfRatingReason: string;
    declare stoppingWhenSatisfiedSelfRatingThisWeek: number;
    declare stoppingWhenSatisfiedSelfRatingReason: string;

    declare weeklyNotes: string;
}

WeeklyAssessment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    thisWeekIWeighed: DataTypes.INTEGER,
    planningSelfRatingThisWeek: DataTypes.INTEGER,
    planningSelfRatingReason: DataTypes.STRING,
    waitingForHungerSelfRatingThisWeek: DataTypes.INTEGER,
    waitingForHungerSelfRatingReason: DataTypes.STRING,
    stoppingWhenSatisfiedSelfRatingThisWeek: DataTypes.INTEGER,
    stoppingWhenSatisfiedSelfRatingReason: DataTypes.STRING,

    weeklyNotes: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'weekly-assessment',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default WeeklyAssessment;