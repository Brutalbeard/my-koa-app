import Router from 'koa-router';
import weeklyPlanController from '../controllers/weeklyPlanController';

const router = new Router({
    prefix: '/weekly-plans'
});

router.post('/', weeklyPlanController.createWeeklyPlan);
router.put('/:id', weeklyPlanController.updateWeeklyPlan);
router.get('/', weeklyPlanController.getWeeklyPlans);
router.get('/:id', weeklyPlanController.getWeeklyPlan);
router.delete('/:id', weeklyPlanController.deleteWeeklyPlan);

export default router;