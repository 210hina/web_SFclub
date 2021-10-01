$(document).ready(function(){
    $('.animation').css('visibility','hidden');
    $(window).scroll(function(){
     var windowHeight = $(window).height(),
         topWindow = $(window).scrollTop();
     $('.animation').each(function(){
      var objectPosition = $(this).offset().top;
      if(topWindow > objectPosition - windowHeight /2){
       $(this).addClass("is-animated");
      }
     });
    });
  });


    $('.light').css('visibility','hidden');
    $(window).scroll(function(){
     var windowHeight = $(window).height(),
         topWindow = $(window).scrollTop();
     $('.light').each(function(){
      var objectPosition = $(this).offset().top;
      if(topWindow > objectPosition - windowHeight + 200){
       $(this).addClass("lightExist");
      }
     });
    });

    window.onload = function() {
        const loader = document.getElementById('loading');
        loader.classList.add('loaded');
      }

  $.scrollify({section:".page"});   

    var current;
  $.scrollify({
      section:".page",
      setHeights:false,
      before:function(i,page){
          current = i;
      },
  });
  $(window).on('resize',function(){
      if(current){
          var currentScrl = $('.page').eq(current).offset().top;
          $(window).scrollTop(currentScrl);
      }
  });
  
