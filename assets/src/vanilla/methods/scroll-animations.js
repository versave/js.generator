/**
 *    Scroll Animations
 */
app.scrollAnimations = function($element) {
    app
        .$win
            .on('load scroll', function() {
                $element
                    .each(function() {
                        if(app.isInViewport($(this))) {
                            $(this).addClass(app.classes.animated);
                        }
                    });
            });
};

/**
 *    Is in viewport util
 */
app.isInViewport = function($element, offset) {
    var offset = offset || 0;
    return app.$win.scrollTop() + app.$win.outerHeight() - offset > $element.offset().top && app.$win.scrollTop() < $element.offset().top + $element.outerHeight() ? true : false;
};