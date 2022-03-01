
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
/*
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
closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  document.body.style.overflow = 'visible';
});
document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    document.body.style.overflow = 'visible';
  }
});*/


let navBg = document.querySelector('.nav__wrapper');
let nav = document.querySelector('.nav__list');
let openNav = document.querySelector('.burger-btn');
//let closeNav = document.querySelector('.close-nav');
let navMenu = document.querySelector('.nav__list')


document.querySelector(".nav__list").style.transition = "0.5s all";
document.querySelector(".burger-btn").style.transition = "0.2s all";

navBg.addEventListener('click', (event) => {
  console.log(event.target);
  if /*((event.target == openNav) || */(event.target == navBg) {
    navBg.classList.remove('active');
    openNav.classList.toggle('active');
    navMenu.classList.remove('active');
    /*document.body.style.overflow = 'visible';*/
  }
})

openNav.addEventListener('click', () => {
  navBg.classList.toggle('active');
  openNav.classList.toggle('active');
  navMenu.classList.toggle('active');
  /*document.body.style.overflow = 'hidden';*/
})

