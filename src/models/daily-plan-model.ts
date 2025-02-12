import {
    DataTypes, HasManyAddAssociationMixin, HasManyGetAssociationsMixin,
    HasManySetAssociationsMixin, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import { sequelize } from '../utils/sequelize';

import DailyAssessment from './daily-assessment-model';
import Meal from './meal-model';

class DailyPlan extends Model<InferAttributes<DailyPlan>, InferCreationAttributes<DailyPlan>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare gratitude: string | null;
    declare todayMyWhyIs: string | null;
    declare focus: string | null;
    declare obstacle: string | null;
    declare overcome: string | null;

    declare getDailyAssessment: HasManyGetAssociationsMixin<DailyAssessment>;
    declare setDailyAssessment: HasManySetAssociationsMixin<DailyAssessment, number>;
    declare addDailyAssessment: HasManyAddAssociationMixin<DailyAssessment, number>;

    declare getMeals: HasManyGetAssociationsMixin<Meal>;
    declare setMeal: HasManySetAssociationsMixin<Meal, number>;
    declare addMeal: HasManyAddAssociationMixin<Meal, number>;
}

DailyPlan.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gratitude: DataTypes.STRING,
    todayMyWhyIs: DataTypes.STRING,
    focus: DataTypes.STRING,
    obstacle: DataTypes.STRING,
    overcome: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'daily-plan',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default DailyPlan;