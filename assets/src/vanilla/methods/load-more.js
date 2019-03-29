/**
*	Load More
*/
app.loadMore = function($parent, trigger) {
	$parent.on('click', trigger, function(e) {
		e.preventDefault();
		
		var $btn = $(this);
		var html = $btn.attr('href');
		var $container = $($btn.data('container'));

		$.ajax({
			url: html
		}).done(function(data) {
			var $items = $(data);

			$items.find(trigger).length ? $btn.replaceWith($items.find(trigger)) : $btn.remove();
			
			$container.append($items);
		});
	});
};