'use strict';
(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 0;
  var GAP = 50;
  var FONT_GAP = 15;
  var TEXT_HEIGHT = 16;
  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;
  var gistX = CLOUD_X + GAP;
  var gistY = FONT_GAP * 3 + TEXT_HEIGHT;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var createMassage = function (ctx, text, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);
    ctx.fillText(text, x, y);
  };

  var getMaxElement = function (arrays) {
    var maxElement = arrays[0];

    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i] > maxElement) {
        maxElement = arrays[i];
      }
    }
    return maxElement;
  };


  /*  */
  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)'); // прямоугольник тень
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // прямоугольник сообщение

    createMassage(ctx, 'Ура вы победили!', gistX, FONT_GAP);
    createMassage(ctx, 'Список результатов: ', gistX, FONT_GAP + TEXT_HEIGHT);


    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], gistX + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - FONT_GAP * 2);
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgb(0, 0, 255,' + Math.random() + ')';
      }
      ctx.fillRect(gistX + (BAR_WIDTH + GAP) * i, (gistY + BAR_MAX_HEIGHT) - (BAR_MAX_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime);

    }
  };

})();
