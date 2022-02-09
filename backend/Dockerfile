FROM node:16
RUN mkdir /app
WORKDIR /app
COPY ./backend/package.json /app
RUN npm install express-session 
RUN npm install express
RUN npm install cors
RUN npm install
COPY backend/ /app/
EXPOSE 8083
CMD ["npm", "start"]