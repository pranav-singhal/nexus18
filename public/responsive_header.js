$(document).on('turbolinks:load',function(){


  $('#responsive_search_icon_button').bind('change', function() {

      $(".search-icon-responsive-changing").toggleClass("shown");

       if (this.checked) {

         $("#responsive_view_header").css("left", "-85vw");



           } else {
             $("#responsive_view_header").css("left", "0vw");
              }
        });




        $('#responsive_side_nav_button_font').bind('change', function() {


                      $('#nav-icon1').toggleClass('open');


              });

});
