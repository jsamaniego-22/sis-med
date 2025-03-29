# Usa una imagen base de Node.js
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Puerto expuesto (debe coincidir con tu app.js)
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["npm", "run", "dev"]