/**
 *	Field Quantity
 */
fieldQuantity() {
	$('.js-quantity__trigger').on('click', function(e) {
		e.preventDefault();

		const $btn = $(this);
		const $container = $btn.parents('.js-quantity');
		const $field = $container.find('input');
		const val = `0${parseInt($btn.data('number')) + parseInt($field.val())}`.slice(-2);

		if(val < 1 || val > 99) {
			return;
		} else {
			$field.val(val);
		}
	});
};