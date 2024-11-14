FROM node:latest AS base

WORKDIR /usr/local/help-hive

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npx prisma generate

FROM base AS build

RUN yarn build

FROM base AS development

ENV NODE_ENV=development

CMD ["yarn", "start:dev"]

FROM node:latest AS production

WORKDIR /usr/local/help-hive

COPY --from=build /usr/local/help-hive/dist ./dist
COPY --from=build /usr/local/help-hive/prisma ./prisma
COPY --from=build /usr/local/help-hive/certs ./certs

COPY package.json yarn.lock ./

RUN yarn install --production

RUN yarn prisma generate

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "dist/main.js"]
