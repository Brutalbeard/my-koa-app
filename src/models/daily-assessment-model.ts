import {
    DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional
} from 'sequelize';
import {sequelize} from '../utils/sequelize';

class DailyAssessment extends Model<InferAttributes<DailyAssessment>, InferCreationAttributes<DailyAssessment>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare sixtyFourOuncesOfWater: boolean | null;
    declare sevenPlusHoursOfSleep: boolean | null;
    declare betterThanYesterday: string | null;
    declare betterTomorrow: string | null;
    declare thankMyself: string | null;
    declare otherThoughts: string | null;
}

DailyAssessment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    sixtyFourOuncesOfWater: DataTypes.BOOLEAN,
    sevenPlusHoursOfSleep: DataTypes.BOOLEAN,
    betterThanYesterday: DataTypes.STRING,
    betterTomorrow: DataTypes.STRING,
    thankMyself: DataTypes.STRING,
    otherThoughts: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'daily-assessment',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default DailyAssessment;