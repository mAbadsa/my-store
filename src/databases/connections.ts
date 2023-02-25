import { Sequelize } from 'sequelize';
import {DATABASE_URL } from '../config';

const sequelize = new Sequelize(DATABASE_URL, {
  define: { underscored: true },
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false,
    } : false,
  }
});
export {sequelize};
