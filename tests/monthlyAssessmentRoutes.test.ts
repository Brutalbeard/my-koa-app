import request from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/utils/sequelize';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('MonthlyAssessment Routes', () => {
    let createdAssessmentId: number;

    it('should create a new monthly assessment', async () => {
        const assessmentData = {
            date: new Date().toISOString(),
            userId: 1,
            poundsLost: 15,
            hoursOfExcercise: 6,
            daysOnPlan: 25,
            sleepOnPlan: true, // boolean value
            plansMade: 2,
            planedAssessments: 2,
            startedFromHungry: true,
            stoppedAtEnough: false,
            drank64OuncesOfWater: 64,
            startingWeight: 210,
            endingWeight: 205,
            neckMeasurement: 16,
            hipMeasurement: 36,
            stomachMeasurement: 31,
            ribCageMeasurement: 21,
            rightThighMeasurement: 23,
            leftThighMeasurement: 23,
            rightArmMeasurement: 13,
            leftArmMeasurement: 13,
            monthlyNotes: 'Test monthly assessment',
            sleepQuality: 8,
            selfRating: 9,
            stressLevel: 4,
            easeAroundFood: 7,
            energyAndMood: 9,
            positiveBodyTalk: 8,
            selfCompassion: 10,
            didIWorkOnWhatISaidIWould: true,
            didIWorkOnWhatISaidIWouldNotes: 'Good job',
            changesNoticed: 'Less stress',
            workOnNextMonth: 'Increase workout',
        };

        const res = await request(app.callback())
            .post('/monthly-assessments')
            .send(assessmentData)
            .expect(201);

        expect(res.body).toHaveProperty('id');
        expect(res.body.sleepOnPlan).toBe(true); // Expect boolean true
        createdAssessmentId = res.body.id;
    });

    it('should retrieve a monthly assessment by id', async () => {
        const res = await request(app.callback())
            .get(`/monthly-assessments/${createdAssessmentId}`)
            .expect(200);
        
        expect(res.body).toHaveProperty('id', createdAssessmentId);
        expect(res.body.sleepOnPlan).toBe(true);
    });

    it('should get monthly assessments with pagination', async () => {
        const res = await request(app.callback())
            .get('/monthly-assessments?limit=5&offset=0')
            .expect(200);
        
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeLessThanOrEqual(5);
    });

    it('should update a monthly assessment', async () => {
        const updateData = {
            sleepOnPlan: false,
            monthlyNotes: 'Updated monthly note',
        };

        const res = await request(app.callback())
            .put(`/monthly-assessments/${createdAssessmentId}`)
            .send(updateData)
            .expect(200);

        expect(res.body.sleepOnPlan).toBe(false);
        expect(res.body.monthlyNotes).toBe('Updated monthly note');
    });

    it('should delete a monthly assessment', async () => {
        await request(app.callback())
            .delete(`/monthly-assessments/${createdAssessmentId}`)
            .expect(204);
    });

    it('should return 404 for a deleted monthly assessment', async () => {
        const res = await request(app.callback())
            .get(`/monthly-assessments/${createdAssessmentId}`)
            .expect(404);

        expect(res.body).toHaveProperty('message', 'Monthly Assessment not found');
    });
});