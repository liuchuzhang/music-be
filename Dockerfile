
FROM liuchuzhang/node-pnpm:latest
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml*", "./"]

RUN pnpm install

COPY . .

EXPOSE 4001
CMD ["pnpm", "run", "server"]
