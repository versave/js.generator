/**
*	Intro Parallax
*/
introParallax($parallaxElement) {
    const self = this;

    self
        .$win
            .on('load scroll', function() {
                $parallaxElement
                    .each(function() {
                        const $element = $(this);
                        const $parent = $element.parents($element.data('container'));
                        
                        if($parent.offset().top + $parent.outerHeight() > self.$win.scrollTop()) {
                            $element.css({
                                'transform': `translate3d(0, ${self.$win.scrollTop() * -0.1}px, 0)`
                            });
                        }
                    });
            });
};
