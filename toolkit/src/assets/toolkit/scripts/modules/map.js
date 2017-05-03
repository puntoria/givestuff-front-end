var map;

var js_file = document.createElement('script');
js_file.type = 'text/javascript';
js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDR_wQs-yNf6-sYmGSGyXHQoXRKL0ZDE6w&callback=initMap';
document.getElementsByTagName('head')[0].appendChild(js_file);

window.initMap = function() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(50.98813235180042, -113.96043309936522),
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
		styles: [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#F1FF00"
            },
            {
                "saturation": -27.4
            },
            {
                "lightness": 9.4
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0099FF"
            },
            {
                "saturation": -20
            },
            {
                "lightness": 36.4
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00FF4F"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FFB300"
            },
            {
                "saturation": -38
            },
            {
                "lightness": 11.2
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00B6FF"
            },
            {
                "saturation": 4.2
            },
            {
                "lightness": -63.4
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#9FFF00"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "gamma": 1
            }
        ]
    }
]                       		
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}