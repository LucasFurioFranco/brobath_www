FROM node:latest

RUN apt update -y
RUN apt upgrade -y
RUN apt install nano -y

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 5002

#CMD [ "npm", "start" ]

CMD [ "nodemon", "index.js" ]
