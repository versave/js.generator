/**
*    JSON Maps
*/
jsonMaps($map) {
    $map.each(function() {
        const $this = $(this);

        loadData($this.data('mapdata')).then(response => {
            const markers = [];
            let zoom = 12;
            let icon = $this.data('map-pin');

            const map = new google.maps.Map($this.get(0), {
                zoom,
                center: response.center
            });

            response
				.markers
                    .forEach(location => {
                    	var marker = new google.maps.Marker({
                            position: location.coordinates,
                            map,
                            icon
                        });

                        markers.push(marker);
                    });
        	});

	});

	function loadData(url) {
    	return $.ajax({
        	url
    	});
	};
};