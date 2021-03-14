# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app desarrolllo
# RUN npm run build
EXPOSE 3000
CMD npm run dev
# CMD npm run start

# CREAR IMAGEN
    # docker build -t client .

# CREAR CONTENEDOR
    # docker run -d -p 3000:3000 -v ./:/usr/src --name my-running-app client:latest

# REFERENCIAS
    # https://medium.com/swlh/dockerize-your-next-js-application-91ade32baa6