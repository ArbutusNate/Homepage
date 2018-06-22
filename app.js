function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem[0].getBoundingClientRect().y );

    return (elemTop < viewportBottom);
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.gogo');

    // If the animation has already been started
    if ($elem.hasClass('ran')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        console.log("starting animation")
        $elem.addClass('ran animated slideInLeft');
    }
}

// Capture scroll events
$(window).scroll(function(){
    // isElementInViewport('#about');
    checkAnimation();
});