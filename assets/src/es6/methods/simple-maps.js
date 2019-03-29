/**
*	Simple Maps
*/
simpleMaps($mapElement) {
	$mapElement.each(function() {
		const $map = $(this);
		let icon = $map.data('icon');
		let zoom = 16;
		const center = {
			lat: $map.data('lat'),
			lng: $map.data('lng')
		};

		const map = new google.maps.Map(this, {
			center,
			zoom
		});

		new google.maps.Marker({
			position: center,
			map,
			icon
		});
	});
};