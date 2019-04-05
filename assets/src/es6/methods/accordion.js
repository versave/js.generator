/**
 *	Accordion
 */
accordion(container, trigger, closeSiblings) {
	const self = this;
	
	$(trigger).on('click', function(e) {
		e.preventDefault();

		const $container = $(this).parents(container);

		$container.toggleClass(self.classes.open);

		if(closeSiblings) {
			$container
				.siblings()
					.removeClass(self.classes.open);
		}
	});
};