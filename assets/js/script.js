var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 74,
  loop:true,
  // autoplay: {
  //   delay: 5000,
  // },    
  breakpoints: {
    275: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    575: {
      slidesPerView: 4,
      spaceBetween: 74,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 74,
    },

    1024: {
      slidesPerView: 'auto',
      spaceBetween: 74,
    },
}});


  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    // autoplay: {
    //     delay: 10000,
    //   },    
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    breakpoints: {
    275: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 32,
    },

  }});


  const navlinks = document.querySelectorAll('.nav-link');

  navlinks.forEach(navlink =>{
    navlink.addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active')
      navlink.classList.add('active')
    })
  })