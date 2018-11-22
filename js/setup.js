'use strict';
// Найдём и покажем окно настроек пользователя.
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

/* Найдём шаблон, который мы будем копировать.
 И найдём элемент, в который мы будем вставлять похожих магов.
*/
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

/*
/* Создаем массивы для рандомного выбора свойств обьекта волшебник */

var firstNames = ['Иван','Хуан','Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];

var secondNames = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];

var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117),rgb(215, 210, 55)','rgb(0, 0, 0)'];

var eyesColors = ['black','red','blue','yellow','green'];

var  simillarWizards = [];
/*Создаem массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей. */
var createArray = function(){
for (var i = 0; i < 4; i++) {
  var  simillarWizard = new Object();
  simillarWizard.name = firstNames[Math.floor(Math.random() * firstNames.length)] + " " +
  secondNames[Math.floor(Math.random() * secondNames.length)];
  simillarWizard.coatColor = coatColors[Math.floor(Math.random() * coatColors.length)];
  simillarWizard.eyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)];
  simillarWizards.push(simillarWizard);
  }
  return simillarWizards;
};
//createArray(firstNames, secondNames, coatColors, eyesColors);

//Отрисуем  шаблон  для создания похожих волшебников в документ.
var renderWizard = function (wizard){
var wizardElement = similarWizardTemplate.cloneNode(true);
wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
/*Отрисовка сгенерированныч DOM-элементов в блок .setup-similar-list.
Для вставки элементов используутся DocumentFragment. */
var appendWizard = function(){
var fragment = document.createDocumentFragment();
 for (var i = 0; i < simillarWizards.length; i++) {
   fragment.appendChild(createArray(firstNames, secondNames, coatColors, eyesColors)renderWizard(simillarWizards[i]));
  }
   similarListElement.appendChild(fragment);
};

appendWizard(simillarWizards);

/*Покажем блок с похожими персонажами. */
document.querySelector('.setup-similar').classList.remove('hidden');
