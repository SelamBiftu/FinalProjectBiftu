$(function() {
  $("table").css("background-color", "pink");
});
$(function (){
  $("video").fadeToggle(2000).delay(4000).fadeToggle(4000); 
  /*
  $("video").slideUp(1000).delay(2000).slideDown(1000);*/
});
$(function(){
  $('.ctctp1').hide();
});
$(function(){
  $('.submitbtn').on('click', function(){
    $('.ctctp2').hide();
    $('.ctctp1').show();
  });     
 }); 