/**
*	Custom File Input
*/
app.customFileInput = function($input) {
	$input.on('change', function(e) {
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');

		$(this)
			.parent()
				.append('<p class="file-name">' + filename + '</p>')
					.attr('title', filename);
	});
};

