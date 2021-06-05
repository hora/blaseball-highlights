FROM node:16-slim as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./src/ /app/src
COPY ./www/ /app/www
COPY ./lib/ /app/lib

RUN npm install -g browserify
RUN npm install .
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/www /usr/share/nginx/html/app
