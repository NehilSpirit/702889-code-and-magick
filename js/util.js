'use strict';
(function () {
  var DEFAULT_X = 50 + '%';
  var DEFAULT_Y = 80 + 'px';
  var setup = document.querySelector('.setup');

  window.getDefaultPlase = function () {
    setup.style.top = DEFAULT_Y;
    setup.style.left = DEFAULT_X;
  };
})();
