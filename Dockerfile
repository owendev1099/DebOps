FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Quitamos --production por ahora para asegurar que instale todo
RUN npm install 

COPY . .

EXPOSE 3000

# CAMBIO AQUÍ: Debe ser server.js, no index.js
CMD [ "node", "server.js" ]