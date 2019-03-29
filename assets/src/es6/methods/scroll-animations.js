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