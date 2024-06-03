FROM node:16-alpine as Build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

FROM node:16-alpine as Production

WORKDIR /app

COPY --chown=node:node --from=Build /app .

COPY . .

EXPOSE 3000

CMD [ "npm","start" ] 

