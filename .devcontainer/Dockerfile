FROM node:25.5-trixie

RUN apt-get update \
  && export DEBIAN_FRONTEND=noninteractive \
  && apt-get install -y --no-install-recommends git openssh-client

RUN mkdir /workspaces

RUN npm install -g gulp-cli

USER node
