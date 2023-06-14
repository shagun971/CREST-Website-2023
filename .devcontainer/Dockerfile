FROM node:16.18-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git yarn python3 make g++ && \
    yarn global add gatsby-cli@4.24.0

EXPOSE 8000 9000