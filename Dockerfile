FROM node:12.18.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn install

COPY . /usr/src/app/

RUN yarn dist

CMD yarn start

EXPOSE 3000
