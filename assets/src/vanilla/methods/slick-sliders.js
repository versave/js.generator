/**
*	Slcik Sliders
*/
app.slickSliders = function(sliders) {
	sliders
		.forEach(function(slider) {
			var $container = slider.$container;
			var $slides = slider.$slides;
			var settings = slider.settings;
			var arrowControls = slider.arrowControls;
			var dotControls = slider.dotControls;

			$container
				.find($slides)
					.slick(settings);

			$container.each(function() {
				var $slider = $(this);
				var $sliderSlides = $slider.find($slides);

				if(arrowControls.status) {
					$sliderSlides.slick('slickSetOption', 'appendArrows', $slider.find(arrowControls.$element), true);							
				}

				if(dotControls.status) {
					$sliderSlides.slick('slickSetOption', 'appendDots', $slider.find(dotControls.$element), true);
				}

				if(slider.htmlSlides) {
					$sliderSlides.slick('slickSetOption', 'slidesToShow', $sliderSlides.data('slides'), true);
				}
			});
		});
};