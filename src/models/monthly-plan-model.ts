import {
    DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import {sequelize} from '../utils/sequelize';

class MonthlyPlan extends Model<InferAttributes<MonthlyPlan>, InferCreationAttributes<MonthlyPlan>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare userId: number;

    declare poundsToLose: number;

    declare monthlyNotes: string;

    declare iWantToWorkOn: string;
    declare howIWillWorkOn: string;
    declare iWouldFeelSuccess: string;
    declare supportContacts: string;
}

MonthlyPlan.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: DataTypes.INTEGER,

    poundsToLose: DataTypes.INTEGER,

    monthlyNotes: DataTypes.STRING,

    iWantToWorkOn: DataTypes.STRING,
    howIWillWorkOn: DataTypes.STRING,
    iWouldFeelSuccess: DataTypes.STRING,
    supportContacts: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'monthly-plan',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default MonthlyPlan;