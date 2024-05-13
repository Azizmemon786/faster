var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 74,
  loop:true,
  autoplay: {
    delay: 3000,
  },    
  breakpoints: {
    290: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 'auto',
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    },

    1024: {
      slidesPerView: 'auto',
      spaceBetween: 60,
    },

    1216: {
      slidesPerView: 'auto',
      spaceBetween: 74,
    },
}});


  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    // autoplay: {
    //     delay: 0000,
    //   },    
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    breakpoints: {
      290: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1216: {
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