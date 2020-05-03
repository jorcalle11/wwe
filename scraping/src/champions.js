'use strict';

const utils = require('./utils');
const label = 'champions';

module.exports = async function getChampionsFromPage(page, site) {
  console.time(label);

  const getItems = utils.getItemsFromSection(page, site);
  const items = await getItems({
    itemSelector: 'a.superstars-champions--item',
    descriptionSelector: '.superstars-champions--championship'
  });

  const champions = items.map(item => ({
    name: item.title,
    avatar_url: `${site}${item.url}`,
    championship: item.description
  }));

  console.timeEnd(label);
  return champions;
};
