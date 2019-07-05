/**
 * Watch window scroll position and add/remove
 * CSS class to the HTML object as appropriate
 */

(function($) {
	// Track window scroll position and apply CSS class to HTML element
	var hasScrollOffset = function() {
		if ($(window).scrollTop() > 0) {
			$('html').addClass('s-has--scrolloffset');
		} else {
			$('html').removeClass('s-has--scrolloffset');
		}
	};

	$(document).on('ready.scrollpos', hasScrollOffset);
	$(window).on('load.scrollpos scroll.scrollpos', hasScrollOffset);

})(jQuery);
