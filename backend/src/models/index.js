import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import sequelize from '../db.js'; // Asegúrate de que db.js también use ESM

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const models = {};

// Carga dinámica de modelos
const modelFiles = fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'));

for (const file of modelFiles) {
  const module = await import(`./${file}`);
  const model = module.default(sequelize); // Asume que cada modelo exporta por defecto
  models[model.name] = model;
}

// Establece relaciones
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export const exportedModels = { sequelize, ...models }; // Exportación nombrada
export default exportedModels;