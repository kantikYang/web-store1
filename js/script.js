
//слайдер
if (document.querySelector(".swiper")) {
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
}


//табы
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



//попап форма обратной связи
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
if (document.querySelector(".open-popup")) {
  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    document.body.style.overflow = 'visible';
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      document.body.style.overflow = 'visible';
    }
  });
}




//попап нав меню
let navBg = document.querySelector('.nav__wrapper');
let nav = document.querySelector('.nav__list');
let openNav = document.querySelector('.burger-btn');
let navMenu = document.querySelector('.nav__list')


document.querySelector(".nav__list").style.transition = "0.5s all";
document.querySelector(".burger-btn").style.transition = "0.2s all";

navBg.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target == navBg) {
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




//фильтр и сортировка
let closeFilter = document.querySelector('.filter-close');
let openFilter = document.querySelector('.filter-btn');
let filter = document.querySelector('.form-filter');

if (document.querySelector(".filter-btn")) {
  openFilter.addEventListener('click', () => {
    filter.classList.add('active');
  })

  closeFilter.addEventListener('click', () => {
    filter.classList.remove('active');
  })
}


let sortingValue = document.querySelector('.sorting__name ');
let openSort = document.querySelector('.sorting__title ')

if (document.querySelector(".sorting__title")) {
  openSort.addEventListener('click', () => {
    sortingValue.classList.toggle('active');
  })
}