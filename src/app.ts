import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import dailyPlanRoutes from './routes/dailyPlanRoutes';
import dailyHabitRoutes from './routes/dailyHabitRoutes';
import weeklyPlanRoutes from './routes/weeklyPlanRoutes';
import monthlyPlanRoutes from './routes/monthlyPlanRoutes';
import monthlyAssessmentRoutes from './routes/monthlyAssessmentRoutes';
import weeklyAssessmentRoutes from './routes/weeklyAssessmentRoutes';
import dailyAssessmentRoutes from './routes/dailyAssessmentRoutes';

const app = new Koa();

app.use(bodyParser());

app.use(dailyPlanRoutes.routes());
app.use(dailyPlanRoutes.allowedMethods());
app.use(dailyHabitRoutes.routes());
app.use(dailyHabitRoutes.allowedMethods());
app.use(weeklyPlanRoutes.routes());
app.use(weeklyPlanRoutes.allowedMethods());
app.use(monthlyPlanRoutes.routes());
app.use(monthlyPlanRoutes.allowedMethods());
app.use(monthlyAssessmentRoutes.routes());
app.use(monthlyAssessmentRoutes.allowedMethods());
app.use(weeklyAssessmentRoutes.routes());
app.use(weeklyAssessmentRoutes.allowedMethods());
app.use(dailyAssessmentRoutes.routes());
app.use(dailyAssessmentRoutes.allowedMethods());

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;