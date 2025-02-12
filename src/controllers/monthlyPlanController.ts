import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import MonthlyPlan from '../models/monthly-plan-model';

class MonthlyPlanController {
    async createMonthlyPlan(ctx: Context) {
        const monthlyPlanData = ctx.request.body as InferCreationAttributes<MonthlyPlan>;
        const monthlyPlan = await MonthlyPlan.create(monthlyPlanData);
        ctx.status = 201;
        ctx.body = monthlyPlan;
    }

    async updateMonthlyPlan(ctx: Context) {
        const { id } = ctx.params;
        const monthlyPlanData = ctx.request.body as InferCreationAttributes<MonthlyPlan>;
        const monthlyPlan = await MonthlyPlan.findByPk(id);
        if (!monthlyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Monthly Plan not found' };
            return;
        }
        await monthlyPlan.update(monthlyPlanData);
        ctx.body = monthlyPlan;
    }

    async getMonthlyPlans(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const monthlyPlans = await MonthlyPlan.findAll({ limit, offset });
        ctx.body = monthlyPlans;
    }

    async getMonthlyPlan(ctx: Context) {
        const { id } = ctx.params;
        const monthlyPlan = await MonthlyPlan.findByPk(id);
        if (!monthlyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Monthly Plan not found' };
            return;
        }
        ctx.body = monthlyPlan;
    }

    async deleteMonthlyPlan(ctx: Context) {
        const { id } = ctx.params;
        const monthlyPlan = await MonthlyPlan.findByPk(id);
        if (!monthlyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Monthly Plan not found' };
            return;
        }
        await monthlyPlan.destroy();
        ctx.status = 204;
    }
}

export default new MonthlyPlanController();