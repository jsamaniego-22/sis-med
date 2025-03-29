# Usar una imagen base de Node.js 16
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de dependencias
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Exponer el puerto 3000 (puerto por defecto de React)
EXPOSE 3000

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["npm", "start"]