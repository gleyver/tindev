const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

// GET, POST, PUT, DELETE
routes.post('/devs', DevController.store);

module.exports = routes;