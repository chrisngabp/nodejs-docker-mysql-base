# nodejs-docker-mysql-base
Base structure for Nodejs (Express+Sequelize) + Docker + Mysql

## Usage

1. Open Docker
2. In a new terminal type `docker-compose up`
3. In another terminal type `npm start` to run the app with nodemon

Note: if you want you can use localhost:8080 to access Adminer (user: root, pass: example). This project also comes with sequelize-cli integrated so you can use it to create new models.

## Basics

The project comes with a basic "user" model with its controller, route and service. You can get/post/put/delete and the responses will render as an html with Pug.
