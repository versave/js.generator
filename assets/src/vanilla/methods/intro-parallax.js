/**
*	Intro Parallax
*/
app.introParallax = function($parallaxElement) {
    app
        .$win
            .on('load scroll', function() {
                $parallaxElement
                    .each(function() {
                        var $element = $(this);
                        var $parent = $element.parents($element.data('container'));
                        
                        if($parent.offset().top + $parent.outerHeight() > app.$win.scrollTop()) {
                            $element.css({
                                'transform': 'translate3d(0,' + app.$win.scrollTop() * -0.1 + 'px, 0)'
                            });
                        }
                    });
            });
};