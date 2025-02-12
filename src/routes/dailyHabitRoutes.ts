import Router from 'koa-router';
import dailyHabitController from '../controllers/dailyHabitController';

const router = new Router({
    prefix: '/daily-habits'
});

router.post('/', dailyHabitController.createDailyHabit);
router.put('/:id', dailyHabitController.updateDailyHabit);
router.get('/', dailyHabitController.getDailyHabits);
router.get('/:id', dailyHabitController.getDailyHabit);
router.delete('/:id', dailyHabitController.deleteDailyHabit);

export default router;