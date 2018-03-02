$(function(){
  if ($("html").hasClass("csstransforms3d")) {
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
  $('.card').each(function () {
    var cardHeight = $(this).find('.test:first-child').outerHeight();
    $(this).css('height', cardHeight).children().css('height', cardHeight);
  });
});
