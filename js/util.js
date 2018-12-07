'use strict';
(function () {
  var DEFAULT_X = 50 + '%';
  var DEFAULT_Y = 80 + 'px';
  var setup = document.querySelector('.setup');

  window.getDefaultPlase = function () {
    setup.style.top = DEFAULT_Y;
    setup.style.left = DEFAULT_X;
  };
  window.onError = function (message) {
    // eslint-disable-next-line no-console
    console.error(message);
  };
  /* тут все тоже плохо ибо никакой onSucsess быть не должно, а должно использовать
onLoad, но она занята*/
  window.onSucsess = function (info) {
  // return info;
   console.log(info);
  };
})();
