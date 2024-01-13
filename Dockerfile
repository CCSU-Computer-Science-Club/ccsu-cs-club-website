FROM node:20.10.0-alpine

WORKDIR /app

RUN apk update

COPY . .

RUN npm install


#RUN npm run build
#EXPOSE 3000
#CMD ["npm", "start"]

# For testing purposes only
EXPOSE 3000
CMD ["npm", "run", "dev"]