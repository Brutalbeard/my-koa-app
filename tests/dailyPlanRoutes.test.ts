import request from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/utils/sequelize'; // adjust the path as needed

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
    app.removeAllListeners();
});

describe('DailyPlan Routes', () => {
    let createdDailyPlanId: number;

    it('should create a new daily plan', async () => {
        const dailyPlanData = {
            date: new Date().toISOString(),
            gratitude: 'Grateful for testing',
            todayMyWhyIs: 'Test our endpoints',
            focus: 'Testing',
            obstacle: 'None',
            overcome: 'N/A'
        };

        const res = await request(app.callback())
            .post('/daily-plans')
            .send(dailyPlanData)
            .expect(201);

        expect(res.body).toHaveProperty('id');
        createdDailyPlanId = res.body.id;
    });

    it('should get daily plans with pagination', async () => {
        const res = await request(app.callback())
            .get('/daily-plans?limit=5&offset=0')
            .expect(200);

        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a daily plan by id', async () => {
        const res = await request(app.callback())
            .get(`/daily-plans/${createdDailyPlanId}`)
            .expect(200);

        expect(res.body).toHaveProperty('id', createdDailyPlanId);
    });

    it('should update a daily plan', async () => {
        const updatedData = {
            gratitude: 'Grateful for updated testing'
        };

        const res = await request(app.callback())
            .put(`/daily-plans/${createdDailyPlanId}`)
            .send(updatedData)
            .expect(200);

        expect(res.body).toHaveProperty('gratitude', 'Grateful for updated testing');
    });

    it('should delete a daily plan', async () => {
        await request(app.callback())
            .delete(`/daily-plans/${createdDailyPlanId}`)
            .expect(204);
    });

    it('should return a 404 for a deleted daily plan', async () => {
        const res = await request(app.callback())
            .get(`/daily-plans/${createdDailyPlanId}`)
            .expect(404);

        expect(res.body).toHaveProperty('message', 'Daily Plan not found');
    });
});