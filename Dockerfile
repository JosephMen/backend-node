FROM node:20

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 1234

CMD [ "npm", "run", "dev" ]

