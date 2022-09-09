
FROM node:18-alpine3.15
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn

COPY . .

EXPOSE 4001
CMD ["yarn", "server"]
