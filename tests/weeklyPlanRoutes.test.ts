import request from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/utils/sequelize';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('WeeklyPlan Routes', () => {
    let createdWeeklyPlanId: number;

    it('should create a new weekly plan', async () => {
        const weeklyPlanData = {
            date: new Date().toISOString(),
            poundsToLose: 5,
            differentThisWeek: 'Try new workout routines',
            goalsOutsideScale: 'Improve flexibility',
            obstacles: 'Time constraints'
        };

        const res = await request(app.callback())
            .post('/weekly-plans')
            .send(weeklyPlanData)
            .expect(201);

        expect(res.body).toHaveProperty('id');
        createdWeeklyPlanId = res.body.id;
    });

    it('should get weekly plans with pagination', async () => {
        const res = await request(app.callback())
            .get('/weekly-plans?limit=5&offset=0')
            .expect(200);

        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a weekly plan by id', async () => {
        const res = await request(app.callback())
            .get(`/weekly-plans/${createdWeeklyPlanId}`)
            .expect(200);

        expect(res.body).toHaveProperty('id', createdWeeklyPlanId);
    });

    it('should update a weekly plan', async () => {
        const updatedData = {
            poundsToLose: 7,
            obstacles: 'Limited gym time'
        };

        const res = await request(app.callback())
            .put(`/weekly-plans/${createdWeeklyPlanId}`)
            .send(updatedData)
            .expect(200);

        expect(res.body).toHaveProperty('poundsToLose', 7);
        expect(res.body).toHaveProperty('obstacles', 'Limited gym time');
    });

    it('should delete a weekly plan', async () => {
        await request(app.callback())
            .delete(`/weekly-plans/${createdWeeklyPlanId}`)
            .expect(204);
    });

    it('should return 404 for a deleted weekly plan', async () => {
        const res = await request(app.callback())
            .get(`/weekly-plans/${createdWeeklyPlanId}`)
            .expect(404);

        expect(res.body).toHaveProperty('message', 'Weekly Plan not found');
    });
});