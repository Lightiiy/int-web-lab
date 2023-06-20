FROM node:19

RUN mkdir -p /main

COPY ./package.json /main/

WORKDIR /main

RUN npm --force install

COPY ./ /main/

EXPOSE 3000

ENTRYPOINT [ "npm", "start"]

