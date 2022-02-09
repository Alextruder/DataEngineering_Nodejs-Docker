FROM node:16
WORKDIR /backend
COPY ./backend/package.json /backend
RUN npm install
COPY ./ /backend/
EXPOSE 8083
CMD ["npm", "start"]