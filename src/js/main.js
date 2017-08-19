'use strict'

var wowObj = new WOW();
wowObj.init();

// Latitude and longitude вашего места
	var position = [55.0261249, 73.2908279];
	 
	function showGoogleMaps() {
	 
	var latLng = new google.maps.LatLng(position[0], position[1]);
	 
	var mapOptions = {
		zoom: 15, // initialize zoom level - the max value is 21
		streetViewControl: false, // hide the yellow Street View pegman
		scaleControl: true, // allow users to zoom the Google Map
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: latLng
	};
	 
	map = new google.maps.Map(document.getElementsByClassName('map__google')[0],
	mapOptions);
	 
	// Show the default red marker at the location
	marker = new google.maps.Marker({
	position: latLng,
	map: map,
	draggable: false,
	animation: google.maps.Animation.DROP
	});
	}
 
 google.maps.event.addDomListener(window, 'load', showGoogleMaps);