import Router from 'koa-router';
import dailyAssessmentController from '../controllers/dailyAssessmentController';

const router = new Router({
    prefix: '/daily-assessments'
});

router.post('/', dailyAssessmentController.createDailyAssessment);
router.put('/:id', dailyAssessmentController.updateDailyAssessment);
router.get('/', dailyAssessmentController.getDailyAssessments);
router.get('/:id', dailyAssessmentController.getDailyAssessment);
router.delete('/:id', dailyAssessmentController.deleteDailyAssessment);

export default router;