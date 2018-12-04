
'use strict';
(function () {

  /* основные сценарии взаимодействия пользователя с сайтом*/
  /* окно настроек открыто и поле ввода имени не фокус, нажатие Esc закрывает окно*/
  /* переменные обработчиков*/
  var ENTER = 13;
  var ESC = 27;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var inputUserName = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if ((evt.keyCode === ESC) && !(inputUserName === document.activeElement)) {
      closePopup();
      window.getDefaultPlase();
    }
  };
  /* Открыие окна настроек*/
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  /* Когда окно настройки персонажа открыто, нажатие на клавишу ESC должно закрывать диалог*/
  var closePopup = function () {
    setup.classList.add('hidden');
    window.getDefaultPlase();
    document.removeEventListener('keydown', onPopupEscPress);
  };
  /* Окно.setup должно открываться по нажатию на блок.setup-open.
 Открытие окна производится удалением класса hidden у блока
*/
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  /* Когда иконка пользователя в фокусе .setup-open-icon,
то окно настройки персонажа открываться по нажатию кнопки ENTER*/
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER) {
      openPopup();
    }
  });
  /* Окно.setup должно закрываться по нажатию на элемент.setup-close, расположенный внутри окна*/
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  /* Если окно открыто и фокус находится на кнопке закрытия окна,
то нажатие клавиши ENTER должно приводить к закрытию диалога */
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER) {
      closePopup();
    }
  });
})();

