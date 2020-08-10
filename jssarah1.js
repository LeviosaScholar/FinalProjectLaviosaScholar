// declare variable
var mybutton = document.getElementById("btnScroll");

// The button will be shown after the scrolls down 80px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// The button will be scroll to top after user clicks on the button
function topFunction() {
  //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
