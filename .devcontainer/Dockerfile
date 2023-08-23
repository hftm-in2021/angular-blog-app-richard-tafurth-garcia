FROM node:16

################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    curl

RUN npm install -G typescript ts-node