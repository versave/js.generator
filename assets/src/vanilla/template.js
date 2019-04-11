'use strict';

(function($, document, window, app) {
    window.app = app;

    /**
     *    Init App
     */
    app.init = function() {
        app.$doc = $(document);
        app.$win = $(window);
        app.$body = $('body');
        app.classes = {
            visible: 'visible',
            open: 'open',
            animated: 'animated',
            current: 'current',
            active: 'active'
        };
        app.breakpoints = {
            desktop: 1200,
            tablet: 1024,
            mobile: 768
        };
        app.sliders = [
            {
                $container: $('.slider'),
                $slides: $('.slider__slides'),
                settings: {},
                arrowControls: {
                    status: false,
                    $element: $('.none')
                },
                dotControls: {
                    status: false,
                    $element: $('.none')
                },
                htmlSlides: false
            }
        ];

        // app.method();
    };

    METHODS
})(jQuery, document, window, window.app || {});

/**
 *    Start App
 */
jQuery(document).ready(function() {
    app.init();
});