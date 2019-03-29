/**
*	Slick Sliders
*/
slickSliders(sliders) {
	sliders
		.forEach(slider => {
			const { $container, $slides, settings, arrowControls, dotControls } = slider;

			$container
				.find($slides)
					.slick(settings);

			$container.each(function() {
				const $slider = $(this);
				const $sliderSlides = $slider.find($slides);

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