/**
*	Custom File Input
*/
customFileInput($input) {
	$input.on('change', function(e) {
		const filename = $(this).val().replace(/C:\\fakepath\\/i, '');

		$(this)
			.parent()
				.append(`<p class="file-name">${filename}</p>`)
					.attr('title', filename);
	});
};

