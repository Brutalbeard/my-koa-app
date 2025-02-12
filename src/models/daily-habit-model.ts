import {
    DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import { sequelize } from '../utils/sequelize';

class DailyHabit extends Model<InferAttributes<DailyHabit>, InferCreationAttributes<DailyHabit>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare madeAPlan: boolean | null;
    declare followedPlan: boolean | null;
    declare assessedPlan: boolean | null;
    declare ateWhenHungry: boolean | null;
    declare stoppedAtEnough: boolean | null;
    declare sixtyFourOuncesOfWater: boolean | null;
    declare sevenPlusHoursOfSleep: boolean | null;
}

DailyHabit.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    madeAPlan: DataTypes.BOOLEAN,
    followedPlan: DataTypes.BOOLEAN,
    assessedPlan: DataTypes.BOOLEAN,
    ateWhenHungry: DataTypes.BOOLEAN,
    stoppedAtEnough: DataTypes.BOOLEAN,
    sixtyFourOuncesOfWater: DataTypes.BOOLEAN,
    sevenPlusHoursOfSleep: DataTypes.BOOLEAN,
}, {
    sequelize,
    modelName: 'daily-habit',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default DailyHabit;