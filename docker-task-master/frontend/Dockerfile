FROM node:18.15.0

RUN mkdir -p /main

COPY ./package.json /main/

WORKDIR /main

RUN npm install

COPY ./ /main/

ENTRYPOINT [ "npm", "start", "--host", "0000" ]

