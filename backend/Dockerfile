FROM node:18-alpine

WORKDIR /app

# Copiar dependencias primero (para cache)
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto
COPY src ./src   
COPY db ./db

# Usa ES Modules directamente (sin --experimental-modules)
CMD ["node", "src/app.js"]

#CMD ["sh", "-c", "npm start & sleep 5 && psql -U $POSTGRES_USER -d $POSTGRES_DB -h $POSTGRES_HOST -f /app/db/init.sql"]