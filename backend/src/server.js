const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://gleyver:g41424234@cluster0-bfxex.mongodb.net/omnistack?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(express.json())
server.use(routes);

server.listen(3333);
