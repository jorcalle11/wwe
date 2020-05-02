'use strict';

const CronJob = require('cron').CronJob;
const scraping = require('./src/scraping');

const cronTime = process.env.CRON_TIME || '* * * * *';
const label = 'wwe-scraping';

const job = new CronJob(cronTime, scraping, null, true);
job.start();

console.log(`${label} scheduled to run at ${cronTime}`);
process.on('uncaughtException', handleFatalError);
process.on('unhandledRejection', handleFatalError);

function handleFatalError(error) {
  console.log(error.message);
  console.error(error.stack);
  process.exit(1);
}
