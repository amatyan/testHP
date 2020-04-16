$(function(){

  $('.menu-icon').on('click',function(){
    $('#menu-modal').fadeIn();
    $('.meun-icon').fadeOut();
  });

  $('.close-img').on('click',function(){
    $('#menu-modal').fadeOut();
    $('.menu-icon').fadeIn();
  });

});
