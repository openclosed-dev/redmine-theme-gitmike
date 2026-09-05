FROM node:24-trixie

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
  && apt-get install -y --no-install-recommends \
    git \
    openssh-client

RUN mkdir /workspaces && chown node:node /workspaces

RUN npm install -g gulp-cli

USER node

RUN mkdir -p /workspaces/redmine-theme-gitmike/node_modules
