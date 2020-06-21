let pageBody = document.querySelector('.page-body'); /*страница*/
let SlideItems = document.querySelectorAll('.slider-item'); /*массив слайдов*/
let SliderBtn = document.querySelectorAll('.slider-control'); /*массив кнопок переключателей*/

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
