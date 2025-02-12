import request from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/utils/sequelize';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('Daily Habit Routes', () => {
    let createdHabitId: number;

    it('should create a new daily habit', async () => {
        const habitData = {
            date: new Date().toISOString(),
            madeAPlan: true,
            followedPlan: false,
            assessedPlan: true,
            ateWhenHungry: null,
            stoppedAtEnough: true,
            sixtyFourOuncesOfWater: false,
            sevenPlusHoursOfSleep: true,
        };

        const res = await request(app.callback())
            .post('/daily-habits')
            .send(habitData)
            .expect(201);

        expect(res.body).toHaveProperty('id');
        createdHabitId = res.body.id;
    });

    it('should get daily habits with pagination', async () => {
        const res = await request(app.callback())
            .get('/daily-habits?limit=5&offset=0')
            .expect(200);

        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a daily habit by id', async () => {
        const res = await request(app.callback())
            .get(`/daily-habits/${createdHabitId}`)
            .expect(200);

        expect(res.body).toHaveProperty('id', createdHabitId);
    });

    it('should update a daily habit', async () => {
        const updatedData = {
            madeAPlan: false,
        };

        const res = await request(app.callback())
            .put(`/daily-habits/${createdHabitId}`)
            .send(updatedData)
            .expect(200);

        expect(res.body).toHaveProperty('madeAPlan', false);
    });

    it('should delete a daily habit', async () => {
        await request(app.callback())
            .delete(`/daily-habits/${createdHabitId}`)
            .expect(204);
    });

    it('should return a 404 for a deleted daily habit', async () => {
        const res = await request(app.callback())
            .get(`/daily-habits/${createdHabitId}`)
            .expect(404);

        expect(res.body).toHaveProperty('message', 'Daily Habit not found');
    });
});