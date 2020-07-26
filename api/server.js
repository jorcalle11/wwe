'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const useLogger = JSON.parse(process.env.USE_LOGGER || 'false');
const fakeDataPath = path.resolve(__dirname, '../', 'scraping/data.json');

// enable all CORS requests
app.use(cors());

// enabling HTTP log requests
if (useLogger) {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => res.send({ message: 'wwe api' }));
app.get('/shows', readFakeData('shows'), (req, res) => res.send(req.shows));
app.get('/champions', readFakeData('champions'), (req, res) => {
  res.send(req.champions);
});
app.get('/championships', readFakeData('championships'), (req, res) => {
  res.send(req.championships);
});
app.get('/superstars', readFakeData('superstars'), (req, res) => {
  res.send(req.superstars);
});

function readFakeData(entity = 'shows') {
  return function fakeDataMiddleware(req, res, next) {
    fs.readFile(fakeDataPath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      let parsedData;
      try {
        parsedData = JSON.parse(data);
      } catch (error) {
        return res.status(500).send(error.message);
      }

      req[entity] = parsedData[0][entity];
      if (typeof req[entity] === 'undefined') {
        return res.status(404).send({
          message: `Entity "${entity}" not found`
        });
      }

      next();
    });
  };
}

module.exports = app;
