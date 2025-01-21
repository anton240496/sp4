// js
menubtn.addEventListener ('click',()=>{
    menu.classList.toggle('menu_list_active');
  } )
//   jquery

$('.menu_btn').on('click', function(){
    $('.menu_list').toggleClass('menu_list_active');
  });


  
  $('.primer_inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 1,
            slidesToScroll: 1,
            dots: false

        }
      },
    ]
   });