// src/api.js
const API_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5000' 
  : 'URL_DEL_DEPLOY';

export const agendarCita = (data) => {
  return fetch(`${API_URL}/api/citas/agendar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};