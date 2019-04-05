/**
 *    Scroll Animations
 */
scrollAnimations($element) {
    const self = this;

    self
        .$win
            .on('load scroll', () => {
                $element
                    .each(function() {
                        if(self.isInViewport($(this))) {
                            $(this).addClass(self.classes.animated);
                        }
                    });
            });
};

/**
 *    Is in viewport util
 */
isInViewport($element, offset) {
    const offset = offset || 0;
    return this.$win.scrollTop() + this.$win.outerHeight() - offset > $element.offset().top && this.$win.scrollTop() < $element.offset().top + $element.outerHeight() ? true : false;
};