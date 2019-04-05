/**
 *    Mousewheel Slick
 */
app.mousewheelSlick = function(slider, slides) {
	var $slider = $(slider)
	var $slides = $(slider).find(slides);

	if($slider.length) {
		$slider
			.get(0)
				.addEventListener('mousewheel', mouseWheelEvent, false);
	$slider
		.get(0)
			.addEventListener('DOMMouseScroll', mouseWheelEvent, false);
	}

	function mouseWheelEvent(e) {
		e.preventDefault();
		
	    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	    delta < 1 ? $slides.slick('slickNext') : $slides.slick('slickPrev');
	};
};