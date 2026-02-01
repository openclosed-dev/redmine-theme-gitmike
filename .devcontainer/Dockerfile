FROM node:25.5-trixie

RUN apt-get update \
  && export DEBIAN_FRONTEND=noninteractive \
  && apt-get install -y --no-install-recommends git openssh-client

RUN mkdir /workspaces

USER node

RUN mkdir /home/node/.npm-global
RUN npm config set prefix '/home/node/.npm-global'

ENV PATH=/home/node/.npm-global/bin:$PATH

RUN npm install -g gulp-cli
