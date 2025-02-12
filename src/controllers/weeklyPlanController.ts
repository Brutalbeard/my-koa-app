import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import WeeklyPlan from '../models/weekly-plan-model';

class WeeklyPlanController {
    async createWeeklyPlan(ctx: Context) {
        const weeklyPlanData = ctx.request.body as InferCreationAttributes<WeeklyPlan>;
        const weeklyPlan = await WeeklyPlan.create(weeklyPlanData);
        ctx.status = 201;
        ctx.body = weeklyPlan;
    }

    async updateWeeklyPlan(ctx: Context) {
        const { id } = ctx.params;
        const weeklyPlanData = ctx.request.body as InferCreationAttributes<WeeklyPlan>;
        const weeklyPlan = await WeeklyPlan.findByPk(id);

        if (!weeklyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Weekly Plan not found' };
            return;
        }
        await weeklyPlan.update(weeklyPlanData);
        ctx.body = weeklyPlan;
    }

    async getWeeklyPlans(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const weeklyPlans = await WeeklyPlan.findAll({ limit, offset });
        ctx.body = weeklyPlans;
    }

    async getWeeklyPlan(ctx: Context) {
        const { id } = ctx.params;
        const weeklyPlan = await WeeklyPlan.findByPk(id);
        if (!weeklyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Weekly Plan not found' };
            return;
        }
        ctx.body = weeklyPlan;
    }

    async deleteWeeklyPlan(ctx: Context) {
        const { id } = ctx.params;
        const weeklyPlan = await WeeklyPlan.findByPk(id);
        if (!weeklyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Weekly Plan not found' };
            return;
        }
        await weeklyPlan.destroy();
        ctx.status = 204;
    }
}

export default new WeeklyPlanController();