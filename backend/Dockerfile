FROM node:16
WORKDIR /backend
COPY ./backend/package.json /backend
RUN npm install express-session 
RUN npm install express
RUN npm install cors
RUN npm install
COPY ./backend/ /backend/
EXPOSE 8083
CMD ["npm", "start"]