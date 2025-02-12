import Router from 'koa-router';
import monthlyPlanController from '../controllers/monthlyPlanController';

const router = new Router({
    prefix: '/monthly-plans'
});

router.post('/', monthlyPlanController.createMonthlyPlan);
router.put('/:id', monthlyPlanController.updateMonthlyPlan);
router.get('/', monthlyPlanController.getMonthlyPlans);
router.get('/:id', monthlyPlanController.getMonthlyPlan);
router.delete('/:id', monthlyPlanController.deleteMonthlyPlan);

export default router;