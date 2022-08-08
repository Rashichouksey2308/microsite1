
        $('.custome-logos').slick({
            margin:10,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:1500,
            arrows:false,
            paushOnHover:false,
            draggable: true,
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

          // Free courses slick slider


        $('.Free-courses').slick({
          margin:10,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:1500,
          arrows:false,
          paushOnHover:false,
          draggable: true,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

        //  video founder slick slider
$(document).ready(function () {
  $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.thumbnil_slider'
  });
  $('.thumbnil_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.banner_slider',
      dots: false,
      centerMode: true,
      arrows: false,
      focusOnSelect: true
  });

});
