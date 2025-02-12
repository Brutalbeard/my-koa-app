import {
    DataTypes, HasManyAddAssociationMixin, HasManyGetAssociationsMixin,
    HasManySetAssociationsMixin, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import { sequelize } from '../utils/sequelize';

import DailyPlan from './daily-plan-model';

class Meal extends Model<InferAttributes<Meal>, InferCreationAttributes<Meal>> {
    declare id: CreationOptional<number>;
    declare date: Date;
    declare actual: string | null;
    declare onPlan: boolean | null;
    declare hungriness: string | null;
    declare satisfaction: string | null;
    declare mealType: "Breakfast" | "Lunch" | "Dinner" | "Other" | "Snack";

    declare getDailyPlan: HasManyGetAssociationsMixin<DailyPlan>;
    declare setDailyPlan: HasManySetAssociationsMixin<DailyPlan, number>;
    declare addDailyPlan: HasManyAddAssociationMixin<DailyPlan, number>;
}

Meal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
        },
    },
    actual: DataTypes.STRING,
    onPlan: DataTypes.BOOLEAN,
    hungriness: DataTypes.STRING,
    satisfaction: DataTypes.STRING,
    mealType: {
        type: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner', 'Other', 'Snack'),
        allowNull: false,
        validate: {
            isIn: [['Breakfast', 'Lunch', 'Dinner', 'Other', 'Snack']],
        },
    },
}, {
    sequelize,
    modelName: 'meal',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['deletedAt'],
        }
    },
    timestamps: true,
});

export default Meal;