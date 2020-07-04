let pageBody=document.querySelector(".page-body"),SlideItems=document.querySelectorAll(".slider-item"),SliderBtn=document.querySelectorAll(".slider-control"),messagePopupElement=document.querySelector(".message-popup-container"),openBtnMessage=document.querySelector(".js-subscribe"),closeBtnMessage=document.querySelector(".js-close-message-btn"),messageForm=document.querySelector(".message-form"),messageName=document.querySelector(".js-name"),messageEmail=document.querySelector(".js-email"),messageText=document.querySelector(".js-textarea"),isStorageSupport=!0,storageName="",storageEmail="",storageText="";try{storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email"),storageText=localStorage.getItem("message")}catch(a){isStorageSupport=!1}function buttonActiveSet(b){for(var c=0;c<SliderBtn.length;c++)SliderBtn[c].classList.remove("current");b.classList.add("current")}function slideActiveSet(a){for(var c=0;c<SlideItems.length;c++)SlideItems[c].classList.remove("slide-current"),SlideItems[c].dataset.number===a.dataset.number&&SlideItems[c].classList.add("slide-current");pageBody.classList.contains("page-wrapper-1")&&pageBody.classList.remove("page-wrapper-1"),pageBody.classList.contains("page-wrapper-2")?pageBody.classList.remove("page-wrapper-2"):pageBody.classList.remove("page-wrapper-3"),"1"===a.dataset.number&&pageBody.classList.add("page-wrapper-1"),"2"===a.dataset.number&&pageBody.classList.add("page-wrapper-2"),"3"===a.dataset.number&&pageBody.classList.add("page-wrapper-3")}for(var k=0;k<SliderBtn.length;k++)SliderBtn[k].addEventListener("click",function(){buttonActiveSet(this),slideActiveSet(this)});openBtnMessage.addEventListener("click",function(a){a.preventDefault(),messagePopupElement.classList.add("popup-show"),storageName&&(messageName.value=storageName,messageEmail.value=storageEmail,messageText.value=storageText),messageName.focus()}),closeBtnMessage.addEventListener("click",function(a){a.preventDefault(),messagePopupElement.classList.remove("popup-show"),messagePopupElement.classList.remove("popup-error")}),messageForm.addEventListener("submit",function(a){messageName.value&&messageEmail.value&&messageText.value?(localStorage.setItem("name",messageName.value),localStorage.setItem("email",messageEmail.value),localStorage.setItem("message",messageText.value)):(a.preventDefault(),messagePopupElement.classList.remove("popup-error"),messagePopupElement.offsetWidth=messagePopupElement.offsetWidth,messagePopupElement.classList.add("popup-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&messagePopupElement.classList.contains("popup-show")&&(a.preventDefault(),messagePopupElement.classList.remove("popup-show"),messagePopupElement.classList.remove("popup-error"))});
