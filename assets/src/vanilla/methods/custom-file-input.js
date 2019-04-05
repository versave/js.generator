/**
 *	Custom File Input
 */
app.customFileInput = function($input) {
	$input.on('change', function(e) {
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		var $parent = $(this).parent();
		var $fileHolder = $parent.find('.file-name');

		if($fileHolder.length) {
			$fileHolder
				.text(filename)
					.attr('title', filename);
		} else {
			$parent.append('<p class="file-name">' + filename + '</p>');
			
			$parent
				.find('.file-name')
					.attr('title', filename);
		}
	});
};