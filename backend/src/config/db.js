const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carga variables de entorno

module.exports = new Sequelize(
  process.env.DB_NAME,      // Nombre de la DB
  process.env.DB_USER,      // Usuario PostgreSQL
  process.env.DB_PASSWORD,  // Contraseña
  {
    host: process.env.DB_HOST,  // Ej: 'localhost' o 'db' (si usas Docker)
    dialect: 'postgres',
    logging: false, // Para evitar logs innecesarios
  }
);