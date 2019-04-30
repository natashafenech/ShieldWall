$(window).scroll(function () {
    scrollFunction();
})

$(document).ready(function () {
    scrollFunction();

    setTimeout(function () {
        $("#header-watermark").addClass('load');
    }, 0);

    $('.navbar a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var today = new Date();
    var dayName = days[today.getDay()];

    $("#timetable .col-day-" + dayName).addClass('today').addClass('accordian-open');

    $(".cell-day").click(function () {
        $(".accordian-open").removeClass("accordian-open");
        $(this).parents(".col-day").addClass("accordian-open");
    })
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }

    $('section').each(function () {
        var data = $(this).data('id');

        if ($(this).offset().top < window.pageYOffset + (window.innerHeight / 2) && $(this).offset().top + $(this).height() > window.pageYOffset + (window.innerHeight / 2)) {
            if ($(this).hasClass('load-inner')) {
                $(this).addClass('load');
            }
        }
    });
}

function initMap() {
    // The location of Uluru
    var uluru = { lat: 35.927315, lng: 14.434568 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: uluru,
            streetViewControl: false,
            mapTypeControl: false,
            disableDefaultUI: true, 
            styles: 
            [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ebe3cd"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#523735"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f1e6"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#c9b2a6"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#dcd2be"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#ae9e90"
                    }
                  ]
                },
                {
                  "featureType": "administrative.neighborhood",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#daceba"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#93817c"
                    }
                  ]
                },
                {
                  "featureType": "poi.business",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#aa8f62"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#447530"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f1e6"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#fdfcf8"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f8c967"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#e9bc62"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e98d58"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#db8555"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#806b63"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#8f7d77"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#ebe3cd"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#000000"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#92998d"
                    }
                  ]
                }
              ]
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

window.fbAsyncInit = function() {
  FB.init({
    appId            : '343996416465983',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.2'
  });
};