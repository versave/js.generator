/**
 *	Tabs
 */
app.tabs = function($tabs) {
	$tabs.each(function() {
		var $tabTrigger = $(this).find($(this).data('tab-trigger'));

		$tabTrigger.on('click', function(e) {
			e.preventDefault();

			var $target = $($(this).data('target'));

			$(this)
				.parent()
					.addClass(app.classes.current)
						.siblings()
							.removeClass(app.classes.current);

			$target
				.addClass(app.classes.current)
					.siblings()
						.removeClass(app.classes.current);
		});
	});
};