$(document).ready(function(){
    $('.animation').css('visibility','hidden');
    $(window).scroll(function(){
     var windowHeight = $(window).height(),
         topWindow = $(window).scrollTop();
     $('.animation').each(function(){
      var objectPosition = $(this).offset().top;
      if(topWindow > objectPosition - windowHeight + 200){
       $(this).addClass("is-animated");
      }
     });
    });
  });
