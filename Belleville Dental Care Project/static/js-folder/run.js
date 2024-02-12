//filter products
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
} 
// splide slider
var splide = new Splide( '.splide', {
    type:'loop',
});

splide.mount();



// change link color using jquery

  $('.nav-link').click(function(){
                $(this).css('color','var(--color3)');
        console.log("its working");
        });
// change menu color using jquery

$('.dropdown-item').click(function(){
  $(this).css('color','var(--color3)');
  console.log("its working");
});
// thumbnail slider
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
          fixedWidth: 100,
          type : 'loop',
          gap       : 350,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );
// Top scroll
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 
  // date, time and geolocation
  var date = new Date()+" GeoLocation:https://maps.app.goo.gl/yk9a9bLBRbnNscsdA"; 
  var p = document.getElementById("myId"); 
  p.innerHTML = date; 