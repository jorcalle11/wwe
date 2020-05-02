'use strict';

const puppeteer = require('puppeteer');
const getShowsFromPage = require('./shows');
const site = 'https://www.wwe.com';
const labels = {
  project: 'wwe-scraping',
  show: 'shows'
};

module.exports = async function scraping() {
  console.time(labels.project);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.time(labels.show);
  const shows = await getShowsFromPage(page, site);
  console.timeEnd(labels.show);

  await browser.close();
  console.timeEnd(labels.project);
  console.log('that is it 🎉️ \n');
  return shows;
};
