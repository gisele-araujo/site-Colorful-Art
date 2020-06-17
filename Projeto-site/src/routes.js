const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

routes.post("/sessions", SessionController.create);

module.exports = routes;