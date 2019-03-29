/**
*    Is in viewport util
*/
app.isInViewport = function($element, offset) {
    var offset = offset || 0;
    return app.$win.scrollTop() + app.$win.outerHeight() - offset > $element.offset().top && app.$win.scrollTop() < $element.offset().top + $element.outerHeight() ? true : false;
};