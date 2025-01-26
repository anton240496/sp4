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

//смена одного блокак в массиве
$(function () {
    let btns = document.querySelectorAll('.menu_blink');//кнопка
    // console.log(btns)
    for (btn of btns) {
        btn.addEventListener('click', function () {
            let card = this.closest('.menu_opisanie li');//обезательно (это блок, в котором должны быть все классы ниже) 
            let arr = card.querySelector('.menu_blink_span');
            let clas = card.querySelector('.more_open');

            if (arr.style.transform === "rotate(90deg)") {
                arr.style.transform = "rotate(0deg)";
                clas.style.fontSize = "0px";
                

            } else {
                arr.style.transform = "rotate(90deg)";
                clas.style.fontSize = "16px";
               
                
            }

        });
    }
});


//slick


  $slickGreen = false;
  function greenSlider() {
    if ($(window).width() < 751) {
      if (!$slickGreen) {
        $(".buy_inner").slick({
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
          nextArrow: false,
          prevArrow: false,
          rows: 2,
          dots: true,
        });

        $('.instag_inner').slick({
          dots: true,
          infinite: true,

          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
        });

        $slickGreen = true;
      }
    } else if ($(window).width() > 751) {
      if ($slickGreen) {
        $('.buy_inner').slick('unslick');
        $('.instag_inner').slick('unslick');

          //в одну функции можно задать сколько угодно клдассов для slick
        $slickGreen = false;
      }
    }
  };

  $(document).ready(function () {
    // ....
    greenSlider();
  });
  $(window).on('resize', function () {
    //  ....
    greenSlider();
  });

