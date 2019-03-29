/**
*	Locate Dropdown
*/
locateDropdown($dropdownElement) {
	const self = this;

	$dropdownElement
		.each(function() {
			const $li = $(this).find('ul').parents('li');

			$li.addClass('has-dd');

			$li
				.find('> a')
					.addClass('js-class')
						.attr({
							'data-traverse': 'parent',
							'data-target': 'li',
							'data-class': self.classes.active
						});
		});
};