// Responsive Topnav
function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
   }
// Responsive Topnav end

// Dark mode program
function toggleMode(){
  const bod = document.body;
  bod.classList.toggle('w3-black');
  // For dark mode button content
  toggleText();
  // For cards
  cardDark();
  // For toggle button
  toggleBtn();
  // For Card headers
  toggleHead();
  // For Footer
  darkFoot();
  // For Buttons
  darkBtn();
  }

  // Frequently used variables in this program
  const toggler = document.getElementById('toggle');

  function toggleText(){
      if (toggler.innerHTML === 'Light'){
        toggler.innerHTML = "Dark";
      } else{
        toggler.innerHTML = "Light";
      }
    }

  // Changes bgcolor of toggler when clicked 
  function toggleBtn(){
    toggler.classList.toggle('w3-black');
    }
  
  // Custom Dark theme for cards
  function cardDark(){
    document.querySelectorAll(".w3-card").forEach((el) => {
      el.classList.toggle('card-dark');
    });
  }

  // Headers will be white when in Dark Mode
  function toggleHead() {
      document.querySelectorAll(".head").forEach((el) => {
        el.classList.toggle('w3-text-white');
      });
  }

  // Dark Mode Footer 
  function darkFoot() {
    let x = document.getElementById('footer');
    if (x.className.indexOf("w3-metro-black") == -1) {
      x.className += " w3-metro-black";
    } else {
      x.className = x.className.replace(" w3-metro-black", " card-dark");
    }
  }

  // Dark Mode Buttons
  function darkBtn(){
    document.querySelectorAll(".toggle").forEach((el) => {
      //el.classList.toggle('btn-outline-primary');
      if (el.className.indexOf("btn-outline-dark") == -1) {
        el.className += " btn-outline-dark";
      } else {
        el.className = el.className.replace(" btn-outline-dark", 
        " btn-outline-light");
      }
    });
  }

  // Dark mode by default
  window.onload = function() {
     toggleMode(); 
  }
  // Dark mode program end

// Slideshow 
let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
// Slideshow end

// Fade-in animation
$(document).ready(function() {
  $(window).scroll( function(){
    $('.revealUp').each( function(i){
    var bottom_of_object = $(this).offset().top + 
    $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + 
    $(window).height();
    if( bottom_of_window > bottom_of_object ){
        $(this).addClass('showme');
    }
    if( bottom_of_window < bottom_of_object ){
        $(this).removeClass('showme');
    }
  });
});
});
// Fade-in animation end

// Tooltip initialization
let tooltipTriggerList = [].slice.call(document.querySelectorAll
  ('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) 
  {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // Tooltip initialization end

// The Accordion
function accordion(id) {
  let x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

 // Accordion Text Toggle
 function accText(id) {
  let txt = document.getElementById(id);
  /* it would be <element onclick='accText("txt1")'><span id='txt1'>
  </span></element> */
  if (txt.innerHTML === 'More'){
    txt.innerHTML = "Less";
  } else{
    txt.innerHTML = "More";
  }
}
// Accordion end

// Toggle roles @ header program
let Comptech = document.getElementById('comptech');
let Webdev = document.getElementById('webdev');
let Socmed = document.getElementById('socmed');
const intro = document.getElementById('intro');
function comptech(){
  Webdev.className += ' d-none';
  Comptech.className = Comptech.className.replace('d-none', 'd-block');
  Webdev.className = Webdev.className.replace('d-block', 'd-none');
  Socmed.className = Socmed.className.replace('d-block', 'd-none');
  intro.style.backgroundImage = 'url(comptech.jpg)';
}
function webdev(){  
  Webdev.className -= ' d-none'; // minus (-) instead of plus
  Webdev.className = Webdev.className.replace('d-none', 'd-block');
  Comptech.className = Comptech.className.replace('d-block', 'd-none');
  Socmed.className = Socmed.className.replace('d-block', 'd-none');
  intro.style.backgroundImage = 'url(bgimg.jpg)';
}
function socmed(){
  Webdev.className += ' d-none';
  Socmed.className = Socmed.className.replace('d-none', 'd-block');
  Comptech.className = Comptech.className.replace('d-block', 'd-none');
  Webdev.className = Webdev.className.replace('d-block', 'd-none');
  intro.style.backgroundImage = 'url(socmed.jpg)';
}

// Change Font program
const body = document.body;
const font = document.getElementById('font');
const Roboto = document.getElementById('Roboto');
const Segoe = document.getElementById('Segoe');
const Gugi = document.getElementById('Gugi');
 function roboto(){
  body.style.fontFamily = 'Roboto';
  font.innerHTML = Roboto.innerHTML;
 }
 function segoe(){
  body.style.fontFamily = 'Segoe UI';
  font.innerHTML = Segoe.innerHTML;
 }
 function gugi(){
  body.style.fontFamily = 'Gugi';
  font.innerHTML = Gugi.innerHTML;
 }
// Change Font program end