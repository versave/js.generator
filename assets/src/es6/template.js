'use strict';

class App {
	constructor() {
		this.$doc = $(document);
        this.$win = $(window);
        this.$body = $('body');
        this.classes = {
            visible: 'visible',
            open: 'open',
            animated: 'animated',
            current: 'current',
            active: 'active'
        };
        this.breakpoints = {
            desktop: 1200,
            tablet: 1024,
            mobile: 768
        };
        this.sliders = [
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

        // this.method();
	};
    
    METHODS
};

new App();