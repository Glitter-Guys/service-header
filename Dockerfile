FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run build
RUN npm i -g nodemon

EXPOSE 8080


CMD [ "npm", "run", "docker" ]