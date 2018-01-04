FROM node:8.6.0-slim

WORKDIR /usr/src/app

EXPOSE 80

RUN npm install -g firebase-tools

ENV NPM_CONFIG_LOGLEVEL warn

# add nginx repo and install dependencies
RUN apt-get update && \
    apt-get install -y nginx git bzip2 python make g++ libfreetype6 libfontconfig unzip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ARG FIREBASE_TOKEN
ENV FIREBASE_TOKEN $FIREBASE_TOKEN
ARG TRAINING_PROJECT_NAME
ENV TRAINING_PROJECT_NAME $TRAINING_PROJECT_NAME

COPY package.json package.json

COPY yarn.lock yarn.lock

RUN yarn install

# Only copy source file after to prevent re-installing packages
# due to unrelated code changes
COPY . .

# Build build build
RUN yarn run build

CMD serve -s build
