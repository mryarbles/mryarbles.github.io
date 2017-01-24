;(function($) {
	"use strict";
/*
 header {
 background: #f5b335;
 height: 40px;
 position: fixed;
 top: 0;
 transition: top 0.2s ease-in-out;
 width: 100%;
 }

 .nav-up {
 top: -40px;
 }
* */
	$("head").append('<style>body.peekaboo-is-open { padding-top: 80px; }</style>')
	$("head").append('<style> .peekaboo-nav { height: 80px; position: fixed; top: 0; transition: top 0.5s ease-in-out; width: 100%; z-index: 10001 } </style>');
	$("head").append('<style> .peekaboo-nav.nav-up { top: -80px; } </style>');

	$.fn.PeekabooNav = function(){

		console.log("PeekabooNav");

		var $self = $(this),
				$window = $(window),
				jQueryLocal = $;

		$self.addClass("peekaboo-nav");

		// Hide Header on on scroll down
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $self.outerHeight();

		if($window.scrollTop() < navbarHeight) {
			$("body").addClass("peekaboo-is-open");
		}

		$window.scroll($.proxy(function(event){
			console.log("scroll");
			didScroll = true;
			this.checkScroll();
		},this));

		this.checkScroll = function(){

			var st = $window.scrollTop();

			// Make sure they scroll more than delta
			if(Math.abs(lastScrollTop - st) <= delta)
				return;

			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				$self.removeClass('peekaboo nav-down').addClass('peekaboo nav-up');
				$("body").removeClass("peekaboo-is-open");
			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$self.removeClass('peekaboo nav-up').addClass('peekaboo nav-down');
					$("body").addClass("peekaboo-is-open");
				}
			}

			lastScrollTop = st;
		}

	};






})(jQuery);