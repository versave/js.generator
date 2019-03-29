/*
*	Limit Characters
*/
app.limitCharacters = function($element, maxLenght, endString) {
	$element.each(function() {
		var $this = $(this);
		var text = $this.text();

		if(text.length >= maxLenght) {
			$this.text(text.substring(0, maxLenght) + endString);
		}
	});
};