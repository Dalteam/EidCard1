

$('document').ready(function() {
   $(".result").text(getParameterByName('to'));

  $("#name").on("keyup",function(){
    $(".result").text($(this).val());
  });
  
   $("#submit").on("click",function(){
var url = "https://codepen.io/hussein-younis/pen/BVWEMN?" +"to=" + $(".result").text() ;
    var person = prompt("انسخ هذا الرابط", url);
   
  });
  

});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}