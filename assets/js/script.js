var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 7,
  spaceBetween: 74,
  autoplay: {
    delay: 5000,
  },    
  });


  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    // autoplay: {
    //     delay: 3000,
    //   },    
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
  });