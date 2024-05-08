var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 7,
  spaceBetween: 74,
  autoplay: {
    delay: 5000,
  },    
  breakpoints: {
    // when window width is >= 320px
    275: {
      slidesPerView: 1,
      spaceBetween: 74,
    },
    575: {
      slidesPerView: 4,
      spaceBetween: 74,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 74,
    },

    1024: {
      slidesPerView: 6,
      spaceBetween: 74,
    },
}});


  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    // autoplay: {
    //     delay: 3000,
    //   },    
    breakpoints: {
    275: {
      slidesPerView: 1,
      spaceBetween: 74,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 74,
    },
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
  }});