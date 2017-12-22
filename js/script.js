
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}






$(".secondImage").hide();
$(".thirdImage").hide();

$(".dotFirst").click(function(event){
  $(".dotFirst").css("background","#42a4ff");
  $(".secondImage").fadeOut(500);
  $(".thirdImage").fadeOut(500);
  $(".firstImage").fadeIn(500);
})
$(".dotSecond").click(function(event){
  $(".dotSecond").css("background","#42a4ff");
  $(".firstImage").fadeOut(500);
  $(".thirdImage").fadeOut(500);
  $(".secondImage").fadeIn(500);
})
$(".dotThird").click(function(event){
  $(".dotThird").css("background","#42a4ff");
  $(".firstImage").fadeOut(500);
  $(".secondImage").fadeOut(500);
  $(".thirdImage").fadeIn(500);
})