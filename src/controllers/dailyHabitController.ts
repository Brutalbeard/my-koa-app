import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import DailyHabit from '../models/daily-habit-model';

class DailyHabitController {
    async createDailyHabit(ctx: Context) {
        const habitData = ctx.request.body as InferCreationAttributes<DailyHabit>;
        const habit = await DailyHabit.create(habitData);
        ctx.status = 201;
        ctx.body = habit;
    }

    async updateDailyHabit(ctx: Context) {
        const { id } = ctx.params;
        const habitData = ctx.request.body as InferCreationAttributes<DailyHabit>;
        const habit = await DailyHabit.findByPk(id);
        if (!habit) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Habit not found' };
            return;
        }
        await habit.update(habitData);
        ctx.body = habit;
    }

    async getDailyHabits(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const habits = await DailyHabit.findAll({ limit, offset });
        ctx.body = habits;
    }

    async getDailyHabit(ctx: Context) {
        const { id } = ctx.params;
        const habit = await DailyHabit.findByPk(id);
        if (!habit) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Habit not found' };
            return;
        }
        ctx.body = habit;
    }

    async deleteDailyHabit(ctx: Context) {
        const { id } = ctx.params;
        const habit = await DailyHabit.findByPk(id);
        if (!habit) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Habit not found' };
            return;
        }
        await habit.destroy();
        ctx.status = 204;
    }
}

export default new DailyHabitController();