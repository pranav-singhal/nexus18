$(document).ready(function(){

    $(window).on('load',function(){

      var scroll = new SmoothScroll('a[href*="#"]',{
        offset: -60
      });

      $('#preloader').fadeOut('slow',function(){$(this).remove();});
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
