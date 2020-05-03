'use strict';

const scraping = require('./scraping');
const utils = require('./utils');

scraping().then(done).catch(utils.handleFatalError);

function done(data) {
  console.dir(data);
  console.log('that is it 🎉 \n');
}

process.on('uncaughtException', utils.handleFatalError);
process.on('unhandledRejection', utils.handleFatalError);
