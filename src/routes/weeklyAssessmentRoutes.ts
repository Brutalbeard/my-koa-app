import Router from 'koa-router';
import weeklyAssessmentController from '../controllers/weeklyAssessmentController';

const router = new Router({
    prefix: '/weekly-assessments'
});

router.post('/', weeklyAssessmentController.createWeeklyAssessment);
router.put('/:id', weeklyAssessmentController.updateWeeklyAssessment);
router.get('/', weeklyAssessmentController.getWeeklyAssessments);
router.get('/:id', weeklyAssessmentController.getWeeklyAssessment);
router.delete('/:id', weeklyAssessmentController.deleteWeeklyAssessment);

export default router;