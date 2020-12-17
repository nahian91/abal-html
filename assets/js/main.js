(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		/* Testimonial Slide Active */
		$(".testimonila-area").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			nav: false,
			dots: true
		});

		/* Counter Up */
		$('.counter1').counterUp({
			delay: 10,
			time: 1000
		});

		/* Skills */
		$('#bar1').barfiller();
		$('#bar2').barfiller();
		$('#bar3').barfiller();
		$('#bar4').barfiller();
		$('#bar5').barfiller();
		$('#bar6').barfiller();
		
		/* Portfolio Popup */
		$('.gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* One Page Nav */
		$('.mainmenu ul').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing',
			scrollOffset: 60
		});
		
		/* Typed */
		var element = $(".element");
		element.typed({
			strings: ["Awesome", "Tasty", "Healthy"],
			typeSpeed: 200,
			loop: true
		});
	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 1) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
		
		/* Preloader */
		$(".preloader").fadeOut()
	});
}(jQuery));