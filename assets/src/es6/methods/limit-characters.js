/*
*	Limit Characters
*/
limitCharacters($element, maxLenght, endString) {
	$element.each(function() {
		const $this = $(this);
		const text = $this.text();

		if(text.length >= maxLenght) {
			$this.text(text.substring(0, maxLenght) + endString);
		}
	});
};