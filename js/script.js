$(function(){

  //objectfit

  objectFitImages();

  // CSS変数 IE 対応
cssVars({
  rootElement: document
});

  //ie判定
  var userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
          $('.fadeIn').removeClass('fadeIn')
          $('.fadein1').removeClass('fadein1')
          $('.fadein2').removeClass('fadein2')
        }



  //page-top

  $('.top-btn').click(function() {
    $('html, body').animate({
      scrollTop:0
    }, 400);
  });

  $('.menu-btn').click(function(){
    if($('.modal').css('display') == 'block') {
      $('.modal').slideUp();
    } else {
      $('.modal').slideDown();
    }
  });

  //scroll-btn 
  $('.scroll-btn').click(function() {
    var id = $(this).attr('href');
    var position =$(id).offset().top -60;
    $('html, body').animate({
      scrollTop:position
    }, 300);
  });

  var pagetop = $('#page-top');

  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
  });

  // slick

  $('.mv_container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
  });

  //span class囲み
  $.fn.letterSpan = function() {
 
    // idではなくclassを使い複数設定する想定で each を使う
    $(this).each(function() {
        var text = $.trim(this.textContent),
            html = "";
 
        text.split("").forEach(function(v) {
            html += "<span>" + v + "</span>";
        });
 
        this.innerHTML = html;
    });
};

$("#content-title1").letterSpan();

  //fadeinimage
  var fadeinImage = function(queryName){
    $(window).scroll(function (){
        $(queryName).each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100){
                $(function(){
                    $(queryName).each(function(i){
                        $(this).delay(i * 200).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
  };

  var fadeinLetter = function(queryName){
    $(window).scroll(function (){
        $(queryName).each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100){
                $(function(){
                    $(queryName).each(function(i){
                        $(this).delay(i * 50).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
  };

  

  fadeinLetter('#content-title1 span');
  fadeinLetter('#content-title2 span');

  if(window.innerWidth < 768) {
    $(".fadeIn").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      }
    });
  } else {
    fadeinImage('.fadein1');
    fadeinImage('.fadein2');
  }
  

  //scroll




   (function($){
    $(window).on("load",function(){
      $("#scroll-area").mCustomScrollbar({
        theme:"dark",
        axis:"x",
        });
    });
  })(jQuery);

});