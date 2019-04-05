/**
 *    JSON Maps
 */
app.jsonMaps = function($map) {
    $map.each(function() {
        var $this = $(this);

        loadData($this.data('mapdata')).then(function(response) {
            var zoom = 12;
            var icon = $this.data('map-pin');
            var markers = [];

            var map = new google.maps.Map($this.get(0), {
                zoom: zoom,
                center: response.center
            });

            response
				.markers
                    .forEach(function(location) {
                    	var marker = new google.maps.Marker({
                            position: location.coordinates,
                            map: map,
                            icon: icon
                        });

                        markers.push(marker);
                    });
        	});

	});

	function loadData(url) {
    	return $.ajax({
        	url: url
    	});
	};
};