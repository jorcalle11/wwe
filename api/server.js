'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send({ message: 'wwe api' }));

module.exports = app;
