const express = require('express');
const routes = express.Router();

const todoController = require('../controller/todos');


routes.post('/todos',todoController.addTodos);
routes.get('/todos', todoController.getTodos);
routes.delete('/todos/:id',todoController.deleteTodos);
routes.put('/todos/:id',todoController.updateTodos)


module.exports = routes;