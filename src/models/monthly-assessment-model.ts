import {
    DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import {sequelize} from '../utils/sequelize';


class MonthlyAssessment extends Model<InferAttributes<MonthlyAssessment>, InferCreationAttributes<MonthlyAssessment>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare userId: number;

    declare poundsLost: number;
    declare hoursOfExcercise: number;
    declare daysOnPlan: number;
    declare sleepOnPlan: number;
    declare plansMade: number;
    declare planedAssessments: number;
    declare startedFromHungry: number;
    declare stoppedAtEnough: number;
    declare drank64OuncesOfWater: number;

    declare startingWeight: number;
    declare endingWeight: number;

    declare neckMeasurement: number;
    declare hipMeasurement: number;
    declare stomachMeasurement: number;
    declare ribCageMeasurement: number;
    declare rightThighMeasurement: number;
    declare letfThighMeasurement: number;
    declare rightArmMeasurement: number;
    declare leftArmMeasurement: number;

    declare monthlyNotes: string;

    declare sleepQuality: number;
    declare selfRating: number;
    declare stressLevel: number;
    declare easeAroundFood: number;
    declare enegryAndMood: number;
    declare positiveBodyTalk: number;
    declare selfCompassion: number;

    declare didIWorkOnWhatISaidIWould: boolean;
    declare didIWorkOnWhatISaidIWouldNotes: string;
    declare changesNoticed: string;
    declare workOnNextMonth: string;
}

MonthlyAssessment.init({
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

    poundsLost: DataTypes.INTEGER,
    hoursOfExcercise: DataTypes.INTEGER,
    daysOnPlan: DataTypes.INTEGER,
    sleepOnPlan: DataTypes.INTEGER,
    plansMade: DataTypes.INTEGER,
    planedAssessments: DataTypes.INTEGER,
    startedFromHungry: DataTypes.INTEGER,
    stoppedAtEnough: DataTypes.INTEGER,
    drank64OuncesOfWater: DataTypes.INTEGER,

    startingWeight: DataTypes.INTEGER,
    endingWeight: DataTypes.INTEGER,

    neckMeasurement: DataTypes.INTEGER,
    hipMeasurement: DataTypes.INTEGER,
    stomachMeasurement: DataTypes.INTEGER,
    ribCageMeasurement: DataTypes.INTEGER,
    rightThighMeasurement: DataTypes.INTEGER,
    letfThighMeasurement: DataTypes.INTEGER,
    rightArmMeasurement: DataTypes.INTEGER,
    leftArmMeasurement: DataTypes.INTEGER,

    monthlyNotes: DataTypes.STRING,

    sleepQuality: DataTypes.INTEGER,
    selfRating: DataTypes.INTEGER,
    stressLevel: DataTypes.INTEGER,
    easeAroundFood: DataTypes.INTEGER,
    enegryAndMood: DataTypes.INTEGER,
    positiveBodyTalk: DataTypes.INTEGER,
    selfCompassion: DataTypes.INTEGER,

    didIWorkOnWhatISaidIWould: DataTypes.BOOLEAN,
    didIWorkOnWhatISaidIWouldNotes: DataTypes.STRING,
    changesNoticed: DataTypes.STRING,
    workOnNextMonth: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'monthly-assessment',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default MonthlyAssessment;