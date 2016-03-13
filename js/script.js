function scrollNav() {
  $('.navbar-brand, .nav a').click(function(event) {
    if ($('.navbar-toggle').css('display') != 'none' && (!$(this).hasClass('navbar-brand'))) {
      $(".navbar-toggle").trigger("click");
    }
    $(this).blur();
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - $('body').attr("data-offset")
    }, 400);
    return false;
  });
}

$(document).ready(function() {
  scrollNav();
  $('.site-title').click(function(event) {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 400);
    return false;
  });
  $('.navbar-brand').click(function(event) {
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true) {
      $navbar.collapse('hide');
    }
  });
  $(document).click(function(event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $navbar.collapse('hide');
    }
  });

  //
  // Fix Mapbox breaking a smooth page scroll on touch-enabled devices.
  //
  var scrollPos;
  var lastTimeoutId;

  var disableMapOnScroll = function(e) {

      // Scrolling — display the blocker div.
      document.getElementById('map-overlay').style.display = "block";

      // Save the scroll position
      scrollPos = window.scrollY;

      // Clear any previous timeouts for the scroll stop check 
      // so we only check once regardless of number of scroll events.
      clearTimeout(lastTimeoutId);

      // Check if scroll has stopped (if scroll position hasn’t changed in 100ms.)
      lastTimeoutId = setTimeout(function() {
        if (window.scrollY == scrollPos) {
          // Stopped, hide the blocker div.
          scrollPos = -1;
          document.getElementById('map-overlay').style.display = "none";
        }
      }, 100);
    }
    // Listen for scroll events on non-touch and touch-enabled devices.
  // window.addEventListener('scroll', disableMapOnScroll);
  window.addEventListener('touchmove', disableMapOnScroll);
});
