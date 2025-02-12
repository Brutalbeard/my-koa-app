import { Context } from 'koa';
import { InferCreationAttributes } from 'sequelize';
import MonthlyAssessment from '../models/monthly-assessment-model';

class MonthlyAssessmentController {
    async createMonthlyAssessment(ctx: Context) {
        const assessmentData = ctx.request.body as InferCreationAttributes<MonthlyAssessment>;
        const assessment = await MonthlyAssessment.create(assessmentData);
        ctx.status = 201;
        ctx.body = assessment;
    }

    async updateMonthlyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessmentData = ctx.request.body as InferCreationAttributes<MonthlyAssessment>;
        const assessment = await MonthlyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Monthly Assessment not found' };
            return;
        }
        await assessment.update(assessmentData);
        ctx.body = assessment;
    }

    async getMonthlyAssessments(ctx: Context) {
        const limit = parseInt(ctx.query.limit as string, 10) || 10;
        const offset = parseInt(ctx.query.offset as string, 10) || 0;
        const assessments = await MonthlyAssessment.findAll({ limit, offset });
        ctx.body = assessments;
    }

    async getMonthlyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessment = await MonthlyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Monthly Assessment not found' };
            return;
        }
        ctx.body = assessment;
    }

    async deleteMonthlyAssessment(ctx: Context) {
        const { id } = ctx.params;
        const assessment = await MonthlyAssessment.findByPk(id);
        if (!assessment) {
            ctx.status = 404;
            ctx.body = { message: 'Monthly Assessment not found' };
            return;
        }
        await assessment.destroy();
        ctx.status = 204;
    }
}

export default new MonthlyAssessmentController();