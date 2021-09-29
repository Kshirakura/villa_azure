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
    var position =$(id).offset().top -100;
    $('html, body').animate({
      scrollTop:position
    }, 500);
  });



  // slick

  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
  });

  //span class囲み


$("#content-title1").letterSpan();



  

  //scroll



});