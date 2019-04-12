/**
 *	Sticky Header
 */
stickyHeader($header) {
	const self = this;
	let scrollPos = 0;
	
	window.addEventListener('scroll', function() {
		(document.body.getBoundingClientRect()).top > scrollPos ? $header.addClass(self.classes.sticky) : $header.removeClass(self.classes.sticky);

		scrollPos = (document.body.getBoundingClientRect()).top;
	});
};