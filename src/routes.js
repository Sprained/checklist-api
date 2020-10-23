const express = require('express');
const routes = express.Router();

const EmpresaController = require('./app/controllers/EmpresaController');
const TaskController = require('./app/controllers/TaskController');

routes.get('/empresa', EmpresaController.index);
routes.post('/empresa', EmpresaController.register);

routes.get('/task/:id', TaskController.index);
routes.post('/task/:id', TaskController.register);

module.exports = routes;