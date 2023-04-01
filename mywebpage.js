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

  function toggleText(){
    const toggler = document.getElementById('toggle');
    const toggler2 = document.getElementById('toggle2');
      if (toggler.innerHTML === 'Light' && toggler2.innerHTML === 'Light'){
        toggler.innerHTML = "Dark";
        toggler2.innerHTML = "Dark";
      } else{
        toggler.innerHTML = "Light";
        toggler2.innerHTML = "Light";
      }
    }

  // Changes bgcolor of toggler when clicked 
  function toggleBtn(){
    const btn = document.getElementById('toggle');
    const btn2 = document.getElementById('toggle2');
    btn.classList.toggle('w3-black');
    btn2.classList.toggle('w3-black');
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

/*
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}
// currentDiv
function currentDiv(n, no) {
  showDivs(slideIndex[no] = n, no);
}

function showDivs(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block"; 
  // Dots
  //let dotIndex = ['demo', 'demo1'];
  let dots = document.getElementsByClassName('demo');
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  dots[slideIndex-1].className += " w3-white";
}
*/
/*
let myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
  
  let dots = document.getElementsByClassName("demo");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  dots[slideIndex-1].className += " w3-white";
}
carousel()
*/
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

// Test only (to be removed later)
// Toggle roles @ header program
let Comptech = document.getElementById('comptech');
let Webdev = document.getElementById('webdev');
let Socmed = document.getElementById('socmed');
function comptech(){
  Comptech.className = Comptech.className.replace('d-none', 'd-block');
  Webdev.className += ' d-none'
}
function webdev(){
  Comptech.className = Comptech.className.replace('d-block', 'd-none');
  Webdev.className = Webdev.className.replace('d-none', 'd-block');
}
function socmed(){

}