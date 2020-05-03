'use strict';

const getChampionsFromPage = require('./champions');
const getChampionshipsFromPage = require('./championships');
const utils = require('./utils');
const label = 'superstarsPage';

module.exports = async function superstarsPage(browser, site) {
  console.time(label);

  const url = `${site}/superstars`;
  console.log(`go to ${url}`);

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 0 });

  const [champions, championships, superstars] = await Promise.all([
    getChampionsFromPage(page, site),
    getChampionshipsFromPage(page, site),
    getSuperstarsFromPage(page, site)
  ]);

  await page.close();
  console.timeEnd(label);
  return { champions, championships, superstars };
};

async function getSuperstarsFromPage(page, site) {
  const label = 'superstars';
  console.time(label);

  await utils.autoScroll(page);

  const getItems = utils.getItemsFromSection(page);
  const items = await getItems({
    itemSelector: '.superstars--item--content'
  });

  const superstars = items.map(item => ({
    name: item.title,
    avatar_url: `${site}${item.url}`
  }));

  console.timeEnd(label);
  return superstars;
}
