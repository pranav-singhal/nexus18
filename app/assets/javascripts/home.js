$(window).on('load',function(){

  // remove preloader
  $('#preloader').fadeOut('slow',function(){$(this).remove()});
  // initiate SmoothScroll
  var scroll = new SmoothScroll('a[href*="#"]',{
    offset: -60
  });
  // animate navbar
  $(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("nav").addClass("changeNavbar");

      }
      if ($(this).scrollTop() < 50) {
        $("nav").removeClass("changeNavbar");

      }
    });
  });
  // masonry
  var $container = $('#masonry-container');
  $container.imagesLoaded(function(){

    $container.masonry({
      itemSelector: '.card',
      isAnimated: true,
      animationOptions: {
        duration: 400
      }
    });
  })

  if ($("html").hasClass("csstransforms3d")) {
    $('.card').hover(function () {
      $(this).addClass('flip');
    }, function () {
      $(this).removeClass('flip');
    });
  } else {
    $('.card').hover(function () {
      $(this).find(".front").animate({
        top: -190
      }, 'fast');
    }, function () {
      $(this).find(".front").animate({
        top: 0
      }, 'fast');
    });
  }
  $('.card').each(function () {
    var cardHeight = $(this).find('.test:first-child').outerHeight();
    $(this).css('height', cardHeight).children().css('height', cardHeight);
  });

})
