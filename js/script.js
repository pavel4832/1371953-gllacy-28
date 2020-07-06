let pageBody = document.querySelector('.page-body'); /*страница*/
let SlideItems = document.querySelectorAll('.slider-item'); /*массив слайдов*/
let SliderBtn = document.querySelectorAll('.slider-control'); /*массив кнопок переключателей*/
let messagePopupElement = document.querySelector('.message-popup-container'); /*модальное окно сообщений*/
let openBtnMessage = document.querySelector('.js-subscribe'); /*кнопка вызова окна сообщений*/
let closeBtnMessage = document.querySelector('.js-close-message-btn'); /*кнопка закрытия окна сообщений*/
let messageForm = document.querySelector('.message-form'); /*форма отправки*/
let messageName = document.querySelector('.js-name'); /*поле ввода имени*/
let messageEmail = document.querySelector('.js-email'); /*поле ввода email*/
let messageText = document.querySelector('.js-textarea'); /*поле ввода сообщения*/
let isStorageSupport = true;
let storageName = '';
let storageEmail = '';
let storageText = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
  storageText = localStorage.getItem('message');
} catch (err) {
  isStorageSupport = false;
}

/*Слайдер реализация*/
function buttonActiveSet(element) {
  for (var a = 0; a < SliderBtn.length; a++) {
    SliderBtn[a].classList.remove('current');
  }
  element.classList.add('current');
}

function slideActiveSet(element) {
  for (var b = 0; b < SlideItems.length; b++) {
    SlideItems[b].classList.remove('slide-current');

    if (SlideItems[b].dataset.number === element.dataset.number) {
      SlideItems[b].classList.add('slide-current');
    }
  }

  if (pageBody.classList.contains('page-wrapper-1')) {
    pageBody.classList.remove('page-wrapper-1');
  } if (pageBody.classList.contains('page-wrapper-2')) {
    pageBody.classList.remove('page-wrapper-2');
  } else {
    pageBody.classList.remove('page-wrapper-3');
  }

  if (element.dataset.number === '1') {
    pageBody.classList.add('page-wrapper-1');
  } if (element.dataset.number === '2') {
    pageBody.classList.add('page-wrapper-2');
  } if (element.dataset.number === '3') {
    pageBody.classList.add('page-wrapper-3');
  }
}

for (var k = 0; k < SliderBtn.length; k++) {
  SliderBtn[k].addEventListener('click', function () {
    buttonActiveSet(this);
    slideActiveSet(this);
  })
}

/*Открытие модального окна с формой отправки сообщения*/
openBtnMessage.addEventListener('click', function (e) {
  e.preventDefault();
  messagePopupElement.classList.add('popup-show');

  if (storageName) {
    messageName.value = storageName;
    messageEmail.value = storageEmail;
    messageText.value = storageText;
  }

  messageName.focus();
});

closeBtnMessage.addEventListener('click', function (e) {
  e.preventDefault();
  messagePopupElement.classList.remove('popup-show');
  messagePopupElement.classList.remove('popup-error');
});

messageForm.addEventListener('submit', function (e) {
  if (!messageName.value || !messageEmail.value || !messageText.value) {
    e.preventDefault();
    messagePopupElement.classList.remove('popup-error');
    messagePopupElement.offsetWidth = messagePopupElement.offsetWidth;
    messagePopupElement.classList.add('popup-error');
  } else {
    localStorage.setItem('name', messageName.value);
    localStorage.setItem('email', messageEmail.value);
    localStorage.setItem('message', messageText.value);
  }
});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    if (messagePopupElement.classList.contains('popup-show')) {
      e.preventDefault();
      messagePopupElement.classList.remove('popup-show');
      messagePopupElement.classList.remove('popup-error');
    }
  }
});
