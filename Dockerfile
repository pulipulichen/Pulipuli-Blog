#Specify the version of nodejs.
FROM node:12.0

#Install required packages in os(It is recommended to write it as a spell)
RUN apt-get update && apt-get install -y \
    #Because non-root users use root privileges
    sudo \
    #Get tools from internet
    wget \
    vim \
    apt-utils

#Creating an application directory
RUN mkdir /app
#Use app directory as development directory
WORKDIR /app

#Package in container.json and packate-lock.Make sure that two of json are copied
COPY package.json ./
COPY package-css.js ./
COPY postcss.config.js ./
COPY webpack.config.js ./
# package.Install the package described in json.
RUN npm i

#installed node_Copy files such as module to the container side.
#COPY . .

#RUN ls /app/*
#CMD ["npm","run", "4.webpack-build-production"]