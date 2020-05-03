'use strict';

const puppeteer = require('puppeteer');
const gotoShowsPage = require('./shows');
const goToSuperstarsPage = require('./superstars');

const site = 'https://www.wwe.com';
const label = 'wwe-scraping';

module.exports = async function scraping() {
  console.time(label);
  const browser = await puppeteer.launch({ timeout: 0 });

  const [shows, superstarsInfo] = await Promise.all([
    gotoShowsPage(browser, site),
    goToSuperstarsPage(browser, site)
  ]);

  const data = { shows, ...superstarsInfo };
  await browser.close();
  console.timeEnd(label);
  return data;
};
