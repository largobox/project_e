FROM node:12.14.1

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY cmd.sh ./
COPY dist/index.html ./dist/
COPY dist/server.js ./dist/
COPY webpack.config.js ./

RUN npm install

EXPOSE 3000

CMD ["/bin/bash", "./cmd.sh"]