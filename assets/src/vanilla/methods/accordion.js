/**
*	Accordion
*/
app.accordion = function($container, $trigger, closeSiblings) {
	$trigger.on('click', function(e) {
		e.preventDefault();

		var $container = $(this).parents(container);

		$container.toggleClass(app.classes.open);

		if(closeSiblings) {
			$container
				.siblings()
					.removeClass(app.classes.open);
		}
	});
};