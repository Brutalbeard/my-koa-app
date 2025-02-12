import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite', // or 'mysql', 'postgres', etc.
    storage: './database.sqlite', // path to your database file
    logging: false, // set to true to see SQL queries in the console
    password: 'password', // or null, or an empty string
});

export { sequelize };