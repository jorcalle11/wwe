'use strict';

const label = 'showsPage';

module.exports = async function getShowsFromPage(browser, site) {
  console.time(label);

  const url = `${site}/shows`;
  console.log(`go to ${url}`);

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 0 });

  const categories = [
    {
      name: 'premier',
      sectionSelector: '.wwe-shows-hub__premier',
      imgSelector: 'img.wwe-shows-hub__premier--show-logo'
    },
    {
      name: 'pay_per_view',
      sectionSelector: '.wwe-shows-hub__featured-ppv',
      imgSelector: 'img'
    },
    {
      name: 'digital',
      sectionSelector: '.wwe-shows-hub__featured-digital',
      imgSelector: 'img'
    },
    {
      name: 'original',
      sectionSelector: '.wwe-shows-hub__network-originals',
      imgSelector: 'img'
    },
    {
      name: 'retired_pay_per_view',
      sectionSelector: '.wwe-shows-hub__retired-ppv',
      imgSelector: 'img'
    }
  ];

  const promises = categories.map(category => {
    return getShows(page, { ...category, site });
  });

  const response = await Promise.all(promises);
  const shows = response.flat();
  await page.close();

  console.timeEnd(label);
  return shows;
};

async function getShows(page, context) {
  return page.evaluate(ctx => {
    const section = document.querySelector(ctx.sectionSelector);
    const anchors = section.querySelectorAll('.wwe-shows-hub--show');
    const shows = [];

    for (const anchor of anchors) {
      const img =
        anchor.querySelector(ctx.imgSelector) ||
        section.querySelector(ctx.imageSelector);

      const paragraph = anchor.querySelector('p');
      const schedule = paragraph
        ? paragraph.getAttribute('title') || paragraph.textContent
        : null;

      const name =
        anchor.getAttribute('title') || anchor.getAttribute('data-title');

      const src = img.getAttribute('data-srcset') || img.getAttribute('srcset');
      const logo_url = src ? `${ctx.site}${src.split(' ')[0]}` : null;

      const show = { name, logo_url, schedule, category: ctx.name };
      shows.push(show);
    }

    return shows;
  }, context);
}
