FROM node:latest
RUN mkdir -p /usr/src/apollo-server
RUN npm i yarn -g
WORKDIR /usr/src/apollo-server
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
