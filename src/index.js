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
    touchRatio:1,
    


    grabCursor: true,
    
    autoplay: {
       delay: 1800,
       disableOnInteraction: false,
    },
    speed: 350,


    
 
    //управлениес клавиатуры 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    
    },
    preloadImages: false,
    lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: true,

    },


    
  });
