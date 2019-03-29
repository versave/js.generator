/**
*	Detect Scroll Direction
*/
stickyHeader($header) {
	const self = this;
	const scrollPos = 0;
	
	window.addEventListener('scroll', function() {
		(document.body.getBoundingClientRect()).top > scrollPos ? $header.addClass(self.classes.sticky) : $header.removeClass(self.classes.sticky);

		scrollPos = (document.body.getBoundingClientRect()).top;
	});
};