const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const errorHandler = require('../src/middleware/error.middleware');

const app = express();
require('express-async-errors');
app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errorHandler)

module.exports = app;