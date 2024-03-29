FROM node:12

WORKDIR /src/.

COPY startbootstrap-business-casual-gh-pages ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]