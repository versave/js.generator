/**
*	Field Quantity
*/
app.fieldQuantity = function() {
	$('.js-quantity__trigger').on('click', function(e) {
		e.preventDefault();

		var $btn = $(this);
		var $container = $btn.parents('.js-quantity');
		var $field = $container.find('input');
		var val = `0${parseInt($btn.data('number')) + parseInt($field.val())}`.slice(-2);

		if(val < 1 || val > 99) {
			return;
		} else {
			$field.val(val);
		}
	});
};