$(function(){
 
    $('.nav_title').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('header nav >ul >li').each(function(){
        if($(this).find('ul').length > 0){
            $(this).addClass('dropdown_menu');
        }
    });

    $('nav li.dropdown_menu').hover(
        function(){
            $(this).find('ul').addClass('active').siblings().removeClass('active');;
        }, function(){
            $(this).find('ul').removeClass('active');
    });

    $('aside.info').each(function(){
		var $TabBlock = $('.info_desc_client div', this);
		var $TabBtn = $('.info_buttons li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
	});

    $('.popup-content').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

     $('.about_galery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
});

function initMap(){
    var element = document.getElementById('about_map');
    var options = {
        zoom: 15,
        center: {lat: 45.116715, lng: 39.011362},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#f8f4e3'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f8f4e3'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#2b2b2a'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#2b2b2a'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#2b2b2a'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#e7e7e8'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#2b2b2a'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#fcf0b1'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#ecca83'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#2b2b2a'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#ebc982'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#b5d2e4'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#b5d2e4'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#b5d2e4'}]
            }

        ],
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [
        {
            coordinates: {lat: 45.116273, lng: 39.029032},
            image: 'img/about/marker-2.png',
            info: '<h5>ЖК “КАЛИНИНО ПАРК”</h5>'
        },
        {
            coordinates: {lat: 45.116890, lng: 38.997613},
            image: 'img/about/marker-1.png',
            info: '<h5>OФИС КОМПАНИИ “РСК”</h5>'
        }
    ];

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(properties){

        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap,
        });

        if(properties.image){
            marker.setIcon(properties.image);
        }
        if(properties.info){
            var InfoWindow = new google.maps.InfoWindow({
            content: properties.info
            });
            marker.addListener('click', function(){
                InfoWindow.open(myMap, marker);
            })
        }
    }
}