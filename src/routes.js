const express = require('express');
const routes = express.Router();

const EmpresaController = require('./app/controllers/EmpresaController');
const TaskController = require('./app/controllers/TaskController');
const CardController = require('./app/controllers/CardController');

routes.get('/empresa', EmpresaController.index);
routes.post('/empresa', EmpresaController.register);

routes.get('/card/:id', CardController.index);
routes.post('/card/:id', CardController.register);

routes.get('/task/:id', TaskController.index);
routes.post('/task/:id', TaskController.register);

module.exports = routes;