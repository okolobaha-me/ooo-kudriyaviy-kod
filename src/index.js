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


  });


    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
    itemSelector: '.grid-item',
    columnWidth: 150
   });


