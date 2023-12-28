FROM node:16-alpine

COPY package*.json ./
RUN npm install

COPY dist/ ./dist
COPY .env .

EXPOSE 3000

CMD ["node", "dist/main.js"]