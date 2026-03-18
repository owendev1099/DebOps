FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa tu app (3000 por defecto)
EXPOSE 3000

# Comando para arrancar la app
CMD [ "node", "index.js" ]