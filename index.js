/**
 * Watch window scroll position and add/remove
 * CSS class to the HTML object as appropriate
 *
 * Modify CSS variable --js-scrolloffset in your own code if you want to react
 * after a certain number of pixels - e.g. 50 will add/remove the class when
 * the window scroll offset is 50px.
 *
 * Beware: if the window scroll position is changed by a change in CSS when
 * this value is set, a flickering will occur.
 */

document.documentElement.style.setProperty('--js-scrolloffset', 0);

(function($) {
    // Track window scroll position and apply CSS class to HTML element
    var hasScrollOffset = function() {
        if ($(window).scrollTop() > parseInt(document.documentElement.style.getPropertyValue('--js-scrolloffset'))) {
            if (!$('html').hasClass('s-has--scrolloffset')) {
                $('html').addClass('s-has--scrolloffset');
            }
        } else {
            $('html').removeClass('s-has--scrolloffset');
        }
    };

    $(document).on('ready.scrollpos', hasScrollOffset);
    $(window).on('load.scrollpos scroll.scrollpos', hasScrollOffset);

})(jQuery);