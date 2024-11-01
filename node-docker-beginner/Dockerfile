FROM node:20.11.1

WORKDIR /app

COPY package*.json /app/  

COPY src /app/

RUN npm install

CMD ["node", "index.js"]