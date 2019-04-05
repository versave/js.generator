/**
 *	Simple Maps
 */
app.simpleMaps = function($mapElement) {
	$mapElement.each(function() {
		var $map = $(this);
		var icon = $map.data('icon');
		var zoom = 16;
		var center = {
			lat: $map.data('lat'),
			lng: $map.data('lng')
		};

		var map = new google.maps.Map(this, {
			center: center,
			zoom: zoom,
		});

		new google.maps.Marker({
			position: center,
			map: map,
			icon: icon
		});
	});
};