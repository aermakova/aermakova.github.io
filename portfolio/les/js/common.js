$(function(){
    $('.review_block').slick({
        arrows:false,
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
var backgrounds  = [
        'img/img-1.jpg',
        'img/img-2.jpg',
        'img/img-3.jpg',
        'img/img-4.jpg',
        'img/img-5.jpg',
        'img/img-6.jpg'
    ];
   var i = 0;
   var slide = $('.slide');
function changeSlide( fn, delay ) {
    fn();
    setInterval( fn, delay );
}

changeSlide( function() {
    slide.css('background-image', 'url(' + backgrounds[i] + ')');
    $('.slide').css('background-size', 'cover');
    i++;
    if (i == backgrounds.length) {
        i = 0;
    }
}, 8000);

// ЯНДЕКС КАРТЫ
var myMap;
ymaps.ready(function () {
    var el = $("#map").html();
    if (el != null) {

        var myMap = new ymaps.Map('map', {
                center: [44.02375602, 42.87207249],
                zoom: 14.5,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            },
            {suppressMapOpenBlock: true}
            ),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([44.02370957, 42.87029150], {
                hintContent: 'ул. Этокская, д. 101в',
                balloonContent: 'ул. Этокская, д. 101в'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                style: "default#redSmallPoint"
            });

        myMap.geoObjects
            .add(myPlacemark);
    }
});
