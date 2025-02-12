import { sequelize } from './sequelize';
import DailyPlan from '../models/daily-plan-model';
import DailyHabit from '../models/daily-habit-model';
import WeeklyPlan from '../models/weekly-plan-model';
import MonthlyPlan from '../models/monthly-plan-model';
import DailyAssessment from '../models/daily-assessment-model';
import WeeklyAssessment from '../models/weekly-assessment-model';
import MonthlyAssessment from '../models/monthly-assessment-model';

async function seed() {
  // Recreate all tables
  await sequelize.sync({ force: true });

  // Seed Daily Plans
  const dailyPlanData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    // Add any additional fields required by your DailyPlan model
  }));
  await DailyPlan.bulkCreate(dailyPlanData);

  // Seed Daily Habits
  const dailyHabitData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    habitName: `Habit ${i + 1}`,
    completed: false
  }));
  await DailyHabit.bulkCreate(dailyHabitData);

  // Seed Weekly Plans
  const weeklyPlanData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    poundsToLose: 5 + i,
    differentThisWeek: `Change ${i + 1}`,
    goalsOutsideScale: `Goal ${i + 1}`,
    obstacles: `Obstacle ${i + 1}`
  }));
  await WeeklyPlan.bulkCreate(weeklyPlanData);

  // Seed Monthly Plans
  const monthlyPlanData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    poundsToLose: 5 + i,
    userId: i + 1,
    monthlyNotes: `Monthly notes ${i + 1}`,
    iWantToWorkOn: `Work on ${i + 1}`,
    obstacles: `Obstacle ${i + 1}`,
    goalsOutsideScale: `Goal ${i + 1}`,
    howIWillWorkOn: `How I will work on ${i + 1}`,
    iWouldFeelSuccess: `I would feel success ${i + 1}`,
    supportContacts: `Support contacts ${i + 1}`
  }));
  await MonthlyPlan.bulkCreate(monthlyPlanData);

  // Seed Daily Assessments
  const dailyAssessmentData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    rating: 7 + (i % 3), // Example rating value
    notes: `Daily assessment note ${i + 1}`
  }));
  await DailyAssessment.bulkCreate(dailyAssessmentData);

  // Seed Weekly Assessments
  const weeklyAssessmentData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    thisWeekIWeighed: 150 + i,
    planningSelfRatingThisWeek: 8,
    planningSelfRatingReason: `Reason ${i + 1}`,
    waitingForHungerSelfRatingThisWeek: 7,
    waitingForHungerSelfRatingReason: `Reason ${i + 1}`,
    stoppingWhenSatisfiedSelfRatingThisWeek: 9,
    stoppingWhenSatisfiedSelfRatingReason: `Reason ${i + 1}`,
    weeklyNotes: `Weekly notes ${i + 1}`
  }));
  await WeeklyAssessment.bulkCreate(weeklyAssessmentData);

  // Seed Monthly Assessments
  const monthlyAssessmentData = Array.from({ length: 10 }).map((_, i) => ({
    date: new Date(),
    stoppedAtEnough: 1,
    userId: i + 1,
    monthlyNotes: `Monthly assessment notes ${i + 1}`,
    rating: 7 + (i % 3), // Example rating value
    poundsLost: 2 + i,
    hoursOfExcercise: 5 + i,
    daysOnPlan: 6 + i,
    sleepOnPlan: (i % 2 === 0),
    plansMade: i + 1,
    planedAssessments: i + 1,
    startedFromHungry: 1,
    drank64OuncesOfWater: 1,
    startingWeight: 150 + i,
    endingWeight: 145 + i,
    neckMeasurement: 15 + i,
    hipMeasurement: 35 + i,
    waistMeasurement: 30 + i,
    chestMeasurement: 40 + i,
    thighMeasurement: 20 + i,
    calfMeasurement: 15 + i,
    armMeasurement: 10 + i,
    forearmMeasurement: 8 + i,
    wristMeasurement: 6 + i,
    ankleMeasurement: 9 + i,
    bodyFatPercentage: 20 + i,
    muscleMassPercentage: 30 + i,
    waterPercentage: 50 + i,
    boneDensity: 3 + i,
    visceralFat: 10 + i,
    metabolicAge: 25 + i,
    basalMetabolicRate: 1500 + i,
    stomachMeasurement: 25 + i,
    ribCageMeasurement: 28 + i,
    rightThighMeasurement: 22 + i,
    leftThighMeasurement: 22 + i,
    rightCalfMeasurement: 15 + i,
    leftCalfMeasurement: 15 + i,
    rightArmMeasurement: 12 + i,
    leftArmMeasurement: 12 + i,
    rightForearmMeasurement: 10 + i,
    leftForearmMeasurement: 10 + i,
    rightWristMeasurement: 6 + i,
    leftWristMeasurement: 6 + i,
    rightAnkleMeasurement: 9 + i,
    leftAnkleMeasurement: 9 + i,
    letfThighMeasurement: 22 + i,
    sleepQuality: i + 1,
    selfRating: 8 + (i % 3),
    stressLevel: i + 1,
    energyLevel: i + 1,
    mood: i + 1,
    hungerLevel: i + 1,
    fullnessLevel: i + 1,
    easeAroundFood: i + 1,
    enegryAndMood: i + 1,
    positiveBodyTalk: i + 1,
    selfCompassion: i + 1,
    selfCare: i + 1,
    selfAwareness: i + 1,
    selfAcceptance: i + 1,
    didIWorkOnWhatISaidIWould: true,
    didIWorkOnWhatISaidIWouldNotes: `Notes ${i + 1}`,
    changesNoticed: `Changes noticed ${i + 1}`,
    workOnNextMonth: `Work on next month ${i + 1}`,
    // Add any additional fields required by your MonthlyAssessment model
  }));
  await MonthlyAssessment.bulkCreate(monthlyAssessmentData);

  console.log('Seeding completed.');
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding data:', error);
    process.exit(1);
  });