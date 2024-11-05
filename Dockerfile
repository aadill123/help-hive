FROM node:latest AS build

WORKDIR /usr/local/help-hive
RUN chown -R node:node /usr/local/help-hive

USER node

COPY --chown=node:node package*.json yarn.lock ./

RUN yarn install

COPY --chown=node:node ./ /usr/local/help-hive/

EXPOSE 5000

CMD ["yarn", "start:dev"]
