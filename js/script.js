const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 0,
    navigation:{
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