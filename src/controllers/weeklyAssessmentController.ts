import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import WeeklyAssessment from '../models/weekly-assessment-model';

class WeeklyAssessmentController {
    async createWeeklyAssessment(ctx: Context) {
        const assessmentData = ctx.request.body as InferCreationAttributes<WeeklyAssessment>;
        const assessment = await WeeklyAssessment.create(assessmentData);
        ctx.status = 201;
        ctx.body = assessment;
    }

    async updateWeeklyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessmentData = ctx.request.body as InferCreationAttributes<WeeklyAssessment>;
        const assessment = await WeeklyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Weekly Assessment not found' };
            return;
        }
        await assessment.update(assessmentData);
        ctx.body = assessment;
    }

    async getWeeklyAssessments(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const assessments = await WeeklyAssessment.findAll({ limit, offset });
        ctx.body = assessments;
    }

    async getWeeklyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessment = await WeeklyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Weekly Assessment not found' };
            return;
        }
        ctx.body = assessment;
    }

    async deleteWeeklyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessment = await WeeklyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Weekly Assessment not found' };
            return;
        }
        await assessment.destroy();
        ctx.status = 204;
    }
}

export default new WeeklyAssessmentController();