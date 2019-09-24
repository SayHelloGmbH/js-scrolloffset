/**
 * Watch window scroll position and add/remove
 * CSS class to the HTML object as appropriate
 *
 * Modify sayhellogmbh_js_scrolloffset in your own code if you want to react
 * after a certain number of pixels - e.g. 50 will add/remove the class when
 * the window scroll offset is 50px.
 */

var sayhellogmbh_js_scrolloffset = 0;

(function($) {
    // Track window scroll position and apply CSS class to HTML element
    var hasScrollOffset = function() {
        if ($(window).scrollTop() > sayhellogmbh_js_scrolloffset) {
            $('html').addClass('s-has--scrolloffset');
        } else {
            $('html').removeClass('s-has--scrolloffset');
        }
    };

    $(document).on('ready.scrollpos', hasScrollOffset);
    $(window).on('load.scrollpos scroll.scrollpos', hasScrollOffset);

})(jQuery);