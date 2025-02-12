import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import DailyPlan from '../models/daily-plan-model';

class DailyPlanController {
    async createDailyPlan(ctx: Context) {
        const dailyPlanData = ctx.request.body as InferCreationAttributes<DailyPlan>;
        const dailyPlan = await DailyPlan.create(dailyPlanData);
        ctx.status = 201;
        ctx.body = dailyPlan;
    }

    async updateDailyPlan(ctx: Context) {
        const { id } = ctx.params;
        const dailyPlanData = ctx.request.body as InferCreationAttributes<DailyPlan>;
        const dailyPlan = await DailyPlan.findByPk(id);

        if (!dailyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Plan not found' };
            return;
        }

        await dailyPlan.update(dailyPlanData);
        ctx.body = dailyPlan;
    }

    async getDailyPlans(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const dailyPlans = await DailyPlan.findAll({ limit, offset });
        ctx.body = dailyPlans;
    }

    async getDailyPlan(ctx: Context) {
        const { id } = ctx.params;
        const dailyPlan = await DailyPlan.findByPk(id);
        if (!dailyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Plan not found' };
            return;
        }
        ctx.body = dailyPlan;
    }

    async deleteDailyPlan(ctx: Context) {
        const { id } = ctx.params;
        const dailyPlan = await DailyPlan.findByPk(id);

        if (!dailyPlan) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Plan not found' };
            return;
        }

        await dailyPlan.destroy();
        ctx.status = 204;
    }
}

export default new DailyPlanController();