// scroll top button ============================
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// close-menu ============================
function openNav() {
 document.getElementById("mySidepanel").style.width = "320px";
}
function closeNav() {
 document.getElementById("mySidepanel").style.width = "0";
}