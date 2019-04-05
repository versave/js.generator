/**
 *	Tabs
 */
tabs($tabs) {
	const self = this;
	
	$tabs.each(function() {
		const $tabTrigger = $(this).find($(this).data('tab-trigger'));

		$tabTrigger.on('click', function(e) {
			e.preventDefault();

			const $target = $($(this).data('target'));

			$(this)
				.parent()
					.addClass(self.classes.current)
						.siblings()
							.removeClass(self.classes.current);

			$target
				.addClass(self.classes.current)
					.siblings()
						.removeClass(self.classes.current);
		});
	});
};