FROM node:21-alpine
WORKDIR /app
COPY package.json .

RUN npm install -g serve
RUN npm install
COPY . .
RUN npm run build
CMD ["serve", "-s", "-l", "8080", "./dist"]