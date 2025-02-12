import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import DailyAssessment from '../models/daily-assessment-model';

class DailyAssessmentController {
    async createDailyAssessment(ctx: Context) {
        const assessmentData = ctx.request.body as InferCreationAttributes<DailyAssessment>;
        const assessment = await DailyAssessment.create(assessmentData);
        ctx.status = 201;
        ctx.body = assessment;
    }

    async updateDailyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessmentData = ctx.request.body as InferCreationAttributes<DailyAssessment>;
        const assessment = await DailyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Assessment not found' };
            return;
        }
        await assessment.update(assessmentData);
        ctx.body = assessment;
    }

    async getDailyAssessments(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const assessments = await DailyAssessment.findAll({ limit, offset });
        ctx.body = assessments;
    }

    async getDailyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessment = await DailyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Assessment not found' };
            return;
        }
        ctx.body = assessment;
    }

    async deleteDailyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessment = await DailyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Daily Assessment not found' };
            return;
        }
        await assessment.destroy({ force: true });
        ctx.status = 204;
    }
}

export default new DailyAssessmentController();