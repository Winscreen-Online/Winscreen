// Upload by - Winscreen.web.id Thursday 29 Desember 2016

//Slider Up
  $(function() {
    $(".winscreen-slider-rs").responsiveSlides({
      auto: true,
      speed: 1500,
      timeout: 4000,
      nav: true,
      pause: true,
      prevText: "Previous",
      nextText: "Next",
      navContainer: "ul.winscreen-slider-rs",
    });
  });


//Slider Down
$('.testimonials-slider').bxSlider({
       slideWidth: 800,
       minSlides: 1,
       maxSlides: 1,
       slideMargin: 32,
       auto: true,
       autoControls: true
     });