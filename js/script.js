const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 0,
  navigation: {
    nextEl: '.arrow-btn__next',
    prevEl: '.arrow-btn__back'
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}

let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup'); 


openPopupButtons.forEach((button) => { 
  button.addEventListener('click', (e) => { 
      e.preventDefault();
      popupBg.classList.add('active'); 
      popup.classList.add('active');
      document.body.style.overflow = 'hidden'; 
  })
});
closePopupButton.addEventListener('click',() => { 
  popupBg.classList.remove('active'); 
  popup.classList.remove('active'); 
});
document.addEventListener('click', (e) => { 
  if(e.target === popupBg) { 
      popupBg.classList.remove('active'); 
      popup.classList.remove('active'); 
  }
});