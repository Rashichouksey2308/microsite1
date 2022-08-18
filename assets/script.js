$(document).ready(function () {
  $('.img-area').slick({
    margin: 10,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    cssEase: 'ease-in',
    touchMove: true,
    paushOnHover: false,
  })
});
$('.custome-logos').slick({
  margin: 10,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:1500,
  arrows: false,
  paushOnHover: false,
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

  ]
});

// Free courses slick slider
$('.Free-courses').slick({
  margin: 10,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  paushOnHover: false,
  draggable: true,
  focusOnSelect: false,
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

// signup modal
$(document).ready(function () {
  $("#showModal").click(function () {
    $('.modal-box').css({ 'visibility': 'visible', 'opacity': '1' });
  });
});
$(document).ready(function () {
  $(".closebtn").click(function () {

    $('.modal-box').css({ 'visibility': 'hidden', 'opacity': '0' });
  });
});

// Upload cv modal

$(document).ready(function () {
  $("#showregisterForm").click(function () {
    $('.modal-bx').css({ 'visibility': 'visible', 'opacity': '1' });
  });
});
$(document).ready(function () {
  $(".closebtn").click(function () {
    console.log("closed");
    $('.modal-bx').css({ 'visibility': 'hidden', 'opacity': '0' });
  });
});

// link  modal

$(document).ready(function () {
  $(".link-modal").click(function () {
    $('.link-modal-box').css({ 'visibility': 'visible', 'opacity': '1' });
  });
});
$(document).ready(function () {
  $(".closebtn").click(function () {
    console.log("closedbb");
    $('.link-modal-box').css({ 'visibility': 'hidden', 'opacity': '0' });
  });
});
// play btn vedio modal
$(document).ready(function () {
  $('#play-vedio-modal').click(function () {
    $('.vedio-modal-box').css({ 'visibility': 'visible', 'opacity': '1' });
  });
});

$(document).ready(function () {
  $('.vedio-closebtn').click(function () {
    console.log("hhh");
    $('.vedio-modal-box').css({ 'visibility': 'hidden', 'opacity': '0' });

  });

});
$(document).ready(function () {
  $('.vedio-closebtn').click(function () {
    $('iframe').attr("https://www.youtube.com/embed/tgbNymZ7vqY");

  });
});
//youtube vedio modal
$(document).ready(function () {
  $('.youtubeModal').click(function () {
    $('.vedio-modal-box').css({ 'visibility': 'visible', 'opacity': '1' });
  });
});

$(document).ready(function () {
  $('.vedio-closebtn').click(function () {
    console.log("hhh");
    $('.vedio-modal-box').css({ 'visibility': 'hidden', 'opacity': '0' });

  });

});
$(document).ready(function () {
  $('.vedio-closebtn').click(function () {
    $('iframe').attr("https://www.youtube.com/embed/tgbNymZ7vqY");

  });
});

//youtubeBtn vedio modal
$(document).ready(function () {
  $('.youtubeVedioModal').click(function () {
    $('.youtubeVedio-modal-box').css({ 'visibility': 'visible', 'opacity': '1' });
  });
});

$(document).ready(function () {
  $('.vedio-closebtn').click(function () {
    console.log("hhh");
    $('.youtubeVedio-modal-box').css({ 'visibility': 'hidden', 'opacity': '0' });

  });

});

$(function(){
  var $mwo = $('.marquee-with-options');
  $('.marquee').marquee();
  $('.marquee-with-options').marquee({
      //speed in milliseconds of the marquee
      speed: 50,
      //gap in pixels between the tickers
      gap: 5,
      //gap in pixels between the tickers
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'up',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true,
      //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
      pauseOnHover: true
  });

  //Direction upward
  $('.marquee-vert').marquee({
      direction: 'up',
      speed: 1500
  });

  //pause and resume links
  $('.pause').click(function(e){
      e.preventDefault();
      $mwo.trigger('pause');
  });
  $('.resume').click(function(e){
      e.preventDefault();
      $mwo.trigger('resume');
  });
  //toggle
  $('.toggle').hover(function(e){
      $mwo.trigger('pause');
  },function(){
      $mwo.trigger('resume');
  })
  .click(function(e){
      e.preventDefault();
  })
});