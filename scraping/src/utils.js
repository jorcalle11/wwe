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
