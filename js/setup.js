'use strict';
(function () {
/* Найдём шаблон, который мы будем копировать.
 И найдём элемент, в который мы будем вставлять похожих магов.
*/
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoat = document.querySelector('.input-coat');
  var inputEyes = document.querySelector('.input-eyes');
  var inputFireball = document.querySelector('.input-fireball');

  /* Создаем массивы для рандомного выбора свойств обьекта волшебник */
  var firstNames = [
    'Иван',
    'Хуан',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var secondNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var fragment = document.createDocumentFragment();

  var simillarWizards = [];

  // вспомогательная функция
  var getRandom = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  /* Создаem массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей. */
  var createArray = function (wizardNum) {
    var wizards = [];
    for (var i = 0; i < wizardNum; i++) {
      var simillarWizard = {};
      simillarWizard.name = getRandom(firstNames) + ' ' + getRandom(secondNames);
      simillarWizard.coatColor = getRandom(coatColors);
      simillarWizard.eyesColor = getRandom(eyesColors);

      wizards.push(simillarWizard);
    }
    return wizards;
  };

  // Отрисуем  шаблон  для создания похожих волшебников в документ.
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  /* Отрисовка сгенерированныч DOM-элементов в блок .setup-similar-list.
Для вставки элементов используутся DocumentFragment. */
  var appendWizard = function () {
    simillarWizards = createArray(4); // формируем массив из 4 значений
    for (var i = 0; i < simillarWizards.length; i++) {
      fragment.appendChild(renderWizard(simillarWizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  appendWizard(simillarWizards);


  /* Изменение цвета мантии персонажа по нажатию.*/
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getRandom(coatColors);
    inputCoat.value = wizardCoat.style.fill;
  });

  /* Изменение цвета глаз персонажа по нажатию.*/
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getRandom(eyesColors);
    inputEyes.value = wizardEyes.style.fill;
  });
  /* Изменение цвета фаерболов по нажатию. */
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = inputFireball.value;
    inputFireball.value = getRandom(fireBallColors);
  });
})();
