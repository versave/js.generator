/**
 *	Scrollspy
 */
app.scrollSpy = function($trigger) {
	$trigger.on('click', function(e) {
		e.preventDefault();

		var $trigger = $(this);
		var $target = $trigger.data('target') ? $($trigger.data('target')) : $($trigger.attr('href'));
		var offset = $trigger.data('offset') ? $trigger.data('offset') : 90; 
		var timing = $trigger.data('timing') ? $trigger.data('timing') : 600; 

		$('html, body').animate({
			scrollTop: $target.offset().top - offset
		}, timing);
	});
};