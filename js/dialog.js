
'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');
  var startCoords = {};
  var dragged = '';

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    dragged = false;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var onMouseMove = function (evt) {
    var moveEvt = evt;
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = setup.offsetTop - shift.y + 'px';
    setup.style.left = setup.offsetLeft - shift.x + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();


    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandle.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandle.addEventListener('click', onClickPreventDefault);
    }


    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
})();