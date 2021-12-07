import './sass/main.scss';
//инициализируем Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    
    autoplay: {
       delay: 1000,
       disableOnInteraction: false,
    },
    speed: 500,

  
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,

    
  });