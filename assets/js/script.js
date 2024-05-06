var swiper = new Swiper(".logoSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".newsSwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
        delay: 3000,
      },    
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
  });