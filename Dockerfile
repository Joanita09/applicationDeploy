FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install -g npm@7.16.0

CMD ["npm", "start"]