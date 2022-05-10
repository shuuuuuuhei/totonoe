FROM node:17.3.0-alpine
WORKDIR /frontend/src
COPY ./totonoe-app .
EXPOSE 3000
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo 
RUN npm install
CMD [ "npm", "start" ]