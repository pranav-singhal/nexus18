$(document).ready(function () {

    if ($("html").hasClass("csstransforms3d")) {
      console.log("inside this ");
        $('.card').hover(function () {
            $(this).addClass('flip');
        }, function () {
            $(this).removeClass('flip');
        });
    } else {
      console.log("inside this2 ");
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

    // Set the size of the card
    $('.card').each(function () {
        var cardHeight = $(this).find('.test:first-child').outerHeight();
        $(this).css('height', cardHeight).children().css('height', cardHeight);
    });

    //masonry
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


});
