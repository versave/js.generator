/**
 *	Responsive Slick
 */
app.responsiveSlick = function($slides, activeAfter, options) {
	$slides.each(function() {
		var $slider = $(this);
		var allowSlider = true;

		app
			.$win
				.on('load resize', function() {
					var width = app.$win.outerWidth();

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