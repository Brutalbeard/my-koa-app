import Router from 'koa-router';
import monthlyAssessmentController from '../controllers/monthlyAssessmentController';

const router = new Router({
    prefix: '/monthly-assessments'
});

router.post('/', monthlyAssessmentController.createMonthlyAssessment);
router.put('/:id', monthlyAssessmentController.updateMonthlyAssessment);
router.get('/', monthlyAssessmentController.getMonthlyAssessments);
router.get('/:id', monthlyAssessmentController.getMonthlyAssessment);
router.delete('/:id', monthlyAssessmentController.deleteMonthlyAssessment);

export default router;