FROM node:21-alpine
WORKDIR /app
COPY package.json .
ENV PORT 5173

RUN npm install -g serve
RUN npm install
COPY . .
RUN npm run build
CMD ["serve", "-s", "-l", "5173", "./dist"]