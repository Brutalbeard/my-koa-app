import request from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/utils/sequelize';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('WeeklyAssessment Routes', () => {
    let createdAssessmentId: number;

    it('should create a new weekly assessment', async () => {
        const assessmentData = {
            date: new Date().toISOString(),
            thisWeekIWeighed: 150,
            planningSelfRatingThisWeek: 8,
            planningSelfRatingReason: 'Felt confident in my plan',
            waitingForHungerSelfRatingThisWeek: 7,
            waitingForHungerSelfRatingReason: 'Managed delays well',
            stoppingWhenSatisfiedSelfRatingThisWeek: 9,
            stoppingWhenSatisfiedSelfRatingReason: 'Knew when to stop eating',
            weeklyNotes: 'Great progress this week'
        };

        const res = await request(app.callback())
            .post('/weekly-assessments')
            .send(assessmentData)
            .expect(201);

        expect(res.body).toHaveProperty('id');
        createdAssessmentId = res.body.id;
    });

    it('should get weekly assessments with pagination', async () => {
        const res = await request(app.callback())
            .get('/weekly-assessments?limit=5&offset=0')
            .expect(200);

        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a weekly assessment by id', async () => {
        const res = await request(app.callback())
            .get(`/weekly-assessments/${createdAssessmentId}`)
            .expect(200);

        expect(res.body).toHaveProperty('id', createdAssessmentId);
    });

    it('should update a weekly assessment', async () => {
        const updatedData = {
            planningSelfRatingThisWeek: 10,
            planningSelfRatingReason: 'Updated after review'
        };

        const res = await request(app.callback())
            .put(`/weekly-assessments/${createdAssessmentId}`)
            .send(updatedData)
            .expect(200);

        expect(res.body).toHaveProperty('planningSelfRatingThisWeek', 10);
        expect(res.body).toHaveProperty('planningSelfRatingReason', 'Updated after review');
    });

    it('should delete a weekly assessment', async () => {
        await request(app.callback())
            .delete(`/weekly-assessments/${createdAssessmentId}`)
            .expect(204);
    });

    it('should return 404 for a deleted weekly assessment', async () => {
        const res = await request(app.callback())
            .get(`/weekly-assessments/${createdAssessmentId}`)
            .expect(404);

        expect(res.body).toHaveProperty('message', 'Weekly Assessment not found');
    });
});