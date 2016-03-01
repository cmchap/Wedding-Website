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
				scrollTop: 0}, 400);
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

	var timeout;
	// if (Modernizr.touch){
	// 	$('.map-cover').hide();
	// } else {
		$('.mapbox').toggleClass("map-desaturated");
	    $('.map-container').on('mouseenter', function() {
			if (timeout !== null) {clearTimeout(timeout);}
			timeout = setTimeout(function() {
				$('.map-cover').hide();
			}, 500);
			$('.mapbox').toggleClass("map-saturated");
		});

		$('.map-container').on('mouseleave', function() {
			if (timeout !== null) {clearTimeout(timeout);}
			timeout = setTimeout(function() {
				$('.map-cover').show();
			}, 200);
			$('.mapbox').toggleClass("map-saturated");
		});
	// }
});
