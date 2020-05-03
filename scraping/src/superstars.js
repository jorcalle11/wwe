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

  const superstars = await page.evaluate(
    ctx => {
      const anchors = document.querySelectorAll('.superstars--item--content');
      const superstars = [];

      for (const anchor of anchors) {
        const img = anchor.querySelector('img');
        const src = img.getAttribute('data-srcset');
        const name = img.getAttribute('title');
        const [avatar_url] = `${ctx.site}${src}`.split(' ');
        superstars.push({ name, avatar_url });
      }

      return superstars;
    },
    { site }
  );

  console.timeEnd(label);
  return superstars;
}
