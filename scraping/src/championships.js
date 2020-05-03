'use strict';

const utils = require('./utils');
const label = 'championships';

module.exports = async function getChampionshipsFromPage(page, site) {
  console.time(label);

  const getItems = utils.getItemsFromSection(page);
  const items = await getItems({
    itemSelector: '.superstars-belts--item',
    descriptionSelector: '.superstars-belts--date'
  });

  const championships = items.map(item => {
    const [start_year, end_year] = item.description.split('-');

    return {
      name: item.title,
      logo_url: `${site}${item.url}`,
      start_year,
      end_year
    };
  });

  console.timeEnd(label);
  return championships;
};
