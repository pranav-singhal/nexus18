$(function(){
  // setTimeout(function(){
  //   $('#preloader').fadeOut('slow',function(){$(this).remove()});
  // },3000);
  $(window).on('load',function(){

    var scroll = new SmoothScroll('a[href*="#"]',{
      offset: -60
    });
    setTimeout(function(){
      $('#preloader').fadeOut('slow',function(){$(this).remove()});
    },3000);

  })

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

})
