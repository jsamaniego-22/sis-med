import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false // o console.log para debug
});

export { sequelize };