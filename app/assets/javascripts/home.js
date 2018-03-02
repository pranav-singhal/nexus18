
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

})
