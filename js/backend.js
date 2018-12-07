'use strict';
(function () {
  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 400:
          onError('Неверный запрос');
          break;
        case 401:
          onError('Пользователь не авторизован');
          break;
        case 404:
          onError('Ваш запрос не найден');
          break;

        default:
          onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Oшибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 2000;
    xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');
    xhr.send();
  };

  window.save = function (data, onSucsess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onSucsess(xhr.response);
          break;
        default:
          onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.open('POST', 'https://js.dump.academy/code-and-magick');
    xhr.send(data);
  };
  /* вот тут нужна помощь уже кучу всего прочитала. не понимаю как сделать пространство
   имен из функций*/
 /* window.backend = {
    load: function () {
    },
    save: function () {
    }
  };*/
})();
