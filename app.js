// attach a callback function to window scroll event
window.onscroll = function() {toggleNavClassOnScroll()};

// get a ref to the navbar in memory
let navbar = document.getElementById("navbar");


function toggleNavClassOnScroll() {
  // apply a style class based on the current state of the scrolling
  if (window.pageYOffset > 0) {
    navbar.classList.remove("navbar-light");
    navbar.classList.add("bg-dark");
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  }
}

$(document).ready(function(){
  
  $('#valideEmail').hide()

  $('#submit').click(function(event){
      
      var email = $('#inputEmail').val()

      if(email.length > 5 && email.includes('@') && email.includes('.')){
          $('#valideEmail').hide()
      }else{
          event.preventDefault()
          $('#valideEmail').show()
      }

  })
})