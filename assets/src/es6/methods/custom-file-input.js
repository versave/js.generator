/**
 *	Custom File Input
 */
customFileInput($input) {
	$input.on('change', function(e) {
		const filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		const $parent = $(this).parent();
		const $fileHolder = $parent.find('.file-name');

		if($fileHolder.length) {
			$fileHolder
				.text(filename)
					.attr('title', filename);
		} else {
			$parent.append(`<p class="file-name">${filename}</p>`);

			$parent
				.find('.file-name')
					.attr('title', filename);
		}
	});
};

