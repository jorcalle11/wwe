'use strict';

exports.autoScroll = function (
  page,
  { milliseconds = 100, xcord = 0, ycord = 100 } = {}
) {
  return page.evaluate(
    async ctx => {
      await new Promise(resolve => {
        let totalHeight = 0;

        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(ctx.xcord, ctx.ycord);
          totalHeight += ctx.ycord;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, ctx.milliseconds);
      });
    },
    { milliseconds, xcord, ycord }
  );
};

exports.getItemsFromSection = function (page) {
  return async function getItems({
    descriptionSelector,
    itemSelector,
    imageSelector = 'img'
  }) {
    return page.evaluate(
      ctx => {
        const $items = document.querySelectorAll(ctx.itemSelector);
        const items = [];

        for (const $item of $items) {
          const img = $item.querySelector(ctx.imageSelector);
          const src =
            img.getAttribute('data-srcset') || img.getAttribute('srcset');

          const $description = ctx.descriptionSelector
            ? $item.querySelector(ctx.descriptionSelector)
            : null;

          const title = img.getAttribute('title');
          const [url] = src.split(' ');
          const description = $description ? $description.textContent : null;
          items.push({ title, description, url });
        }

        return items;
      },
      { descriptionSelector, itemSelector, imageSelector }
    );
  };
};

exports.handleFatalError = function (error) {
  console.log(`💥 ${error.message}`);
  console.log(error.stack);
  process.exit(1);
};
