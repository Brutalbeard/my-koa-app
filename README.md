# My Koa App

This project is a Koa.js application that implements a daily plan management system using Sequelize for database interactions. It also includes endpoints for managing daily plans, daily habits, weekly plans, monthly plans, and various assessments.

## Project Structure

```
my-koa-app
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   ├── dailyPlanController.ts         # Controller for daily plan CRUD operations
│   │   ├── dailyHabitController.ts        # Controller for daily habit CRUD operations
│   │   ├── weeklyPlanController.ts        # Controller for weekly plan CRUD operations
│   │   ├── monthlyPlanController.ts       # Controller for monthly plan CRUD operations
│   │   ├── dailyAssessmentController.ts   # Controller for daily assessment endpoints
│   │   ├── weeklyAssessmentController.ts  # Controller for weekly assessment endpoints
│   │   └── monthlyAssessmentController.ts # Controller for monthly assessment endpoints
│   ├── models                  # Contains Sequelize models
│   │   ├── daily-plan-model.ts
│   │   ├── daily-habit-model.ts
│   │   ├── weekly-plan-model.ts
│   │   ├── monthly-plan-model.ts
│   │   ├── daily-assessment-model.ts
│   │   ├── weekly-assessment-model.ts
│   │   └── monthly-assessment-model.ts
│   ├── routes                  # Contains route definitions
│   │   ├── dailyPlanRoutes.ts
│   │   ├── dailyHabitRoutes.ts
│   │   ├── weeklyPlanRoutes.ts
│   │   ├── monthlyPlanRoutes.ts
│   │   ├── dailyAssessmentRoutes.ts
│   │   ├── weeklyAssessmentRoutes.ts
│   │   └── monthlyAssessmentRoutes.ts
│   └── utils                   # Utility functions and configurations
│       └── sequelize.ts         # Sequelize instance and database connection
├── package.json                # NPM dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Features

- **CRUD Operations**: Create, Read, Update, and Delete operations for:
  - Daily Plans
  - Daily Habits
  - Weekly Plans
  - Monthly Plans
  - Daily Assessments
  - Weekly Assessments
  - Monthly Assessments
- **Sequelize ORM**: Interacts with the database using Sequelize.
- **Koa.js Framework**: Lightweight and modular web framework for Node.js.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-koa-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm run start
   ```
2. The application will be running on `http://localhost:3000`.

## API Endpoints

### Daily Plan Endpoints
- **POST /daily-plan**: Create a new daily plan.
- **GET /daily-plan**: Retrieve all daily plans.
- **PUT /daily-plan/:id**: Update a daily plan by ID.
- **DELETE /daily-plan/:id**: Delete a daily plan by ID.

### Daily Habit Endpoints
- **POST /daily-habits**: Create a new daily habit.
- **GET /daily-habits**: Retrieve all daily habits.
- **GET /daily-habits/:id**: Retrieve a daily habit by ID.
- **PUT /daily-habits/:id**: Update a daily habit by ID.
- **DELETE /daily-habits/:id**: Delete a daily habit by ID.

### Weekly Plan Endpoints
- **POST /weekly-plans**: Create a new weekly plan.
- **GET /weekly-plans**: Retrieve all weekly plans (supports pagination).
- **GET /weekly-plans/:id**: Retrieve a weekly plan by ID.
- **PUT /weekly-plans/:id**: Update a weekly plan by ID.
- **DELETE /weekly-plans/:id**: Delete a weekly plan by ID.

### Monthly Plan Endpoints
- **POST /monthly-plans**: Create a new monthly plan.
- **GET /monthly-plans**: Retrieve all monthly plans (supports pagination).
- **GET /monthly-plans/:id**: Retrieve a monthly plan by ID.
- **PUT /monthly-plans/:id**: Update a monthly plan by ID.
- **DELETE /monthly-plans/:id**: Delete a monthly plan by ID.

### Daily Assessment Endpoints
- **POST /daily-assessments**: Create a new daily assessment.
- **GET /daily-assessments**: Retrieve all daily assessments (supports pagination).
- **GET /daily-assessments/:id**: Retrieve a daily assessment by ID.
- **PUT /daily-assessments/:id**: Update a daily assessment by ID.
- **DELETE /daily-assessments/:id**: Delete a daily assessment by ID.

### Weekly Assessment Endpoints
- **POST /weekly-assessments**: Create a new weekly assessment.
- **GET /weekly-assessments**: Retrieve all weekly assessments (supports pagination).
- **GET /weekly-assessments/:id**: Retrieve a weekly assessment by ID.
- **PUT /weekly-assessments/:id**: Update a weekly assessment by ID.
- **DELETE /weekly-assessments/:id**: Delete a weekly assessment by ID.

### Monthly Assessment Endpoints
- **POST /monthly-assessments**: Create a new monthly assessment.
- **GET /monthly-assessments**: Retrieve all monthly assessments (supports pagination).
- **GET /monthly-assessments/:id**: Retrieve a monthly assessment by ID.
- **PUT /monthly-assessments/:id**: Update a monthly assessment by ID.
- **DELETE /monthly-assessments/:id**: Delete a monthly assessment by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.