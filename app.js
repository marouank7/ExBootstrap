$(document).ready(function () {
  // attach a callback function to window scroll event
  window.onscroll = function () {
    toggleNavClassOnScroll();
  };

  // get dom element in memory
  let emailValidationLabel = $("#valideEmail");
  let navbar = $("#navbar");

  emailValidationLabel.hide();

  $("#submit").click(function (event) {
    var email = $("#inputEmail").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;

    if (filter.test(email)) {
      emailValidationLabel.hide();
    } else {
      event.preventDefault();
      emailValidationLabel.show();
    }
  });
});

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
