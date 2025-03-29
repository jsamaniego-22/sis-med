import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://user:pass@postgres:5432/dbname',
  { logging: false }
);

export default sequelize;