/**
 *	Load More
 */
loadMore($parent, trigger) {
	$parent.on('click', trigger, function(e) {
		e.preventDefault();
		
		const $btn = $(this);
		const html = $btn.attr('href');
		const $container = $($btn.data('container'));

		$.ajax({
			url: html
		}).done(data => {
			const $items = $(data);

			$items.find(trigger).length ? $btn.replaceWith($items.find(trigger)) : $btn.remove();
			
			$container.append($items);
		});
	});
};