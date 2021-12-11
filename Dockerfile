FROM node:17-alpine3.12 as builder

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN ["npm", "run", "build"]

FROM nginx

EXPOSE 80

COPY --from=builder /app/public /usr/share/nginx/html
