/**
*	JS Class
*/
jsClass($btn) {
	$btn.on('click', function(e) {
		e.preventDefault();

		const $target = getTraverse($(this));
		const type = $(this).data('type');
		const className = $(this).data('class');

		switch(type) {
            case 'add':
                $target.addClass(className);
                break;
            case 'remove':
                $target.removeClass(className);
                break;
            default:
                $target.toggleClass(className);
                break;
        }
	});

	function getTraverse($btn) {
		const traverse = $btn.data('traverse') ? $btn.data('traverse').split('~') : '';
		const match = traverse[0];
		const target = $btn.data('target');

		switch(match) {
            case 'parent':
                return $btn.parents(target);
                break;
            case 'find':
                return $btn.find(target);
                break;
            case 'sibling':
                return $btn.siblings(target);
                break;
            default:
                return $(target);
        }
	};
};