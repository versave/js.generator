/**
 *	Locate Dropdown
 */
app.locateDropdown = function($dropdownElement) {
	$dropdownElement.each(function() {
		var $li = $(this).find('ul').parents('li');

		$li.addClass('has-dd');

		$li
			.find('> a')
				.addClass('js-class')
					.attr({
						'data-traverse': 'parent',
						'data-target': 'li',
						'data-class': app.classes.active
					});
	});
};