FROM node:8.6.0-slim

WORKDIR /usr/src/app

EXPOSE 80

RUN npm install -g firebase-tools

ENV NPM_CONFIG_LOGLEVEL warn

ARG FIREBASE_TOKEN
ENV FIREBASE_TOKEN $FIREBASE_TOKEN

COPY package.json package.json

COPY yarn.lock yarn.lock

RUN yarn install

# Only copy source file after to prevent re-installing packages
# due to unrelated code changes
COPY . .

# Build build build
RUN yarn run build

CMD serve -s build
