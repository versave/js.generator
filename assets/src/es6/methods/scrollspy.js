/**
*	Scrollspy
*/
scrollSpy($trigger) {
	$trigger.on('click', function(e) {
		e.preventDefault();

		const $trigger = $(this);
		const $target = $trigger.data('target') ? $($trigger.data('target')) : $($trigger.attr('href'));
		const offset = $trigger.data('offset') ? $trigger.data('offset') : 90; 
		const timing = $trigger.data('timing') ? $trigger.data('timing') : 600; 

		$('html, body').animate({
			scrollTop: $target.offset().top - offset
		}, timing);
	});
};