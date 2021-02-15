FROM node:15.8.0-alpine3.10


RUN mkdir /app
WORKDIR /app
ADD ./src src
ADD package.json .
ADD package-lock.json .
ADD tsconfig.json .

RUN npm install
RUN npx tsc

CMD ["node", "/app/dist/index.js"]
