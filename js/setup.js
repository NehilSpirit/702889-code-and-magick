'use strict';
// Найдём и покажем окно настроек пользователя.
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

/* Найдём шаблон, который мы будем копировать.
 И найдём элемент, в который мы будем вставлять похожих магов.
*/
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

/*
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
  simillarWizards = createArray(4);      // формируем массив из 4 значений
  for (var i = 0; i < simillarWizards.length; i++) {
    fragment.appendChild(renderWizard(simillarWizards[i]));
  }
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

appendWizard(simillarWizards);


