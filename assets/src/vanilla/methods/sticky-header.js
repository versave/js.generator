/**
 *	Sticky Header
 */
app.stickyHeader = function($header) {
	var scrollPos = 0;
	
	window.addEventListener('scroll', function() {
		(document.body.getBoundingClientRect()).top > scrollPos ? $header.addClass(app.classes.sticky) : $header.removeClass(app.classes.sticky);

		scrollPos = (document.body.getBoundingClientRect()).top;
	});
};