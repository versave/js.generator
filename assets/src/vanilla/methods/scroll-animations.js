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