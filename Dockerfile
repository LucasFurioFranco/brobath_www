FROM node:latest

RUN mkdir -p /brobath_www

WORKDIR /brobath_www

COPY . /brobath_www/

RUN npm install

EXPOSE 5002

CMD [ "npm", "start" ]
