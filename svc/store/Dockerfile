FROM node:14.16.1-alpine AS build

WORKDIR /app

COPY ./*.json ./

RUN npm ci --development

COPY ./index.ts ./index.ts

RUN npm run build

FROM node:14.16.1-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm ci --prod

COPY ./data ./data
COPY --from=build /app/dist .

EXPOSE 80

CMD node .