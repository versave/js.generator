/**
 *	Responsive Slick
 */
responsiveSlick($slides, activeAfter, options) {
	const self = this;

	$slides.each(function() {
		const $slider = $(this);
		const allowSlider = true;

		self
			.$win
				.on('load resize', () => {
					const width = self.$win.outerWidth();

					if(width < activeAfter && allowSlider) {
						$slider.slick(options);

						allowSlider = false;
					} else if(width > activeAfter && !allowSlider) {
						$slider.slick('unslick');

						allowSlider = true;
					}
				});
	});
};