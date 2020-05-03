'use strict';

const label = 'champions';

module.exports = async function getChampionsFromPage(page, site) {
  console.time(label);

  const champions = await page.evaluate(
    ctx => {
      const anchors = document.querySelectorAll('a.superstars-champions--item');
      const champions = [];

      for (const anchor of anchors) {
        const img = anchor.querySelector('img');

        const src = img.getAttribute('srcset');
        const title = anchor.getAttribute('title');
        const [name, championship] = title.split(',');
        const [avatar_url] = `${ctx.site}${src}`.split(' ');
        champions.push({ name, avatar_url, championship });
      }

      return champions;
    },
    { site }
  );

  console.timeEnd(label);
  return champions;
};
