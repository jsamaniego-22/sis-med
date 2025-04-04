// models/index.js (versión corregida)
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { sequelize } from '../db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const models = {};

// Carga dinámica de modelos
const modelFiles = fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'));

for (const file of modelFiles) {
  const module = await import(`./${file}`);
  const model = module.default(sequelize); // Asegúrate de que cada modelo exporte una función
  models[model.name] = model;
}

// Establece relaciones
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// Exporta los modelos y sequelize
export { sequelize, models };