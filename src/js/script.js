// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1000,
//         slidesToShow: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }
//             }
//         ]
//     });
//   });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    autoHeight: false
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });