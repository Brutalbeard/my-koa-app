import Router from 'koa-router';
import dailyPlanController from '../controllers/dailyPlanController';

const router = new Router({
    prefix: '/daily-plans'
});

router.post('/', dailyPlanController.createDailyPlan);
router.put('/:id', dailyPlanController.updateDailyPlan);
router.get('/', dailyPlanController.getDailyPlans);
router.get('/:id', dailyPlanController.getDailyPlan);
router.delete('/:id', dailyPlanController.deleteDailyPlan);

export default router;