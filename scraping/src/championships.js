'use strict';

const label = 'championships';

module.exports = async function getChampionshipsFromPage(page, site) {
  console.time(label);

  const championships = await page.evaluate(
    ctx => {
      const anchors = document.querySelectorAll('.superstars-belts--item');
      const championships = [];

      for (const anchor of anchors) {
        const img = anchor.querySelector('img');
        const div = anchor.querySelector('.superstars-belts--date');

        const src = img.getAttribute('data-srcset');
        const name = img.getAttribute('title');
        const [start_year, end_year] = div.textContent.split('-');
        const [logo_url] = `${ctx.site}${src}`.split(' ');
        championships.push({ name, logo_url, start_year, end_year });
      }

      return championships;
    },
    { site }
  );

  console.timeEnd(label);
  return championships;
};
