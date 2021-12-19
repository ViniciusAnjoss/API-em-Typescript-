FROM node:16-alpine

WORKDIR /usr/api

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 3145

CMD ["node", "server.js"]