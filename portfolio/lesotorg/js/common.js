$(function(){
    $('.review_block').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.popup_thank').each(function(){
        $('.thank_close, .popup_thank_bg').click(function(){
            $('.popup_thank').fadeOut();
            $('.popup_thank_bg').fadeOut();
        });
        return false
    });
    $('.open_order').click(function(){
        $('.popup_order .order_title').text($(this).data('title'));
        $('.popup_order .order_price').text($(this).data('price'));

        $('.popup_order input[name="order_title"]').val($(this).data('title'));
        $('.popup_order input[name="order_price"]').val($(this).data('price'));

        $('.popup_order').fadeIn();
        $('.popup_order_bg').fadeIn();

        $('.popup_order_bg, .popup_close').click(function(){
            $('.popup_order').fadeOut();
            $('.popup_order_bg').fadeOut();
        });
        return false
    });
    $('.open_call').click(function(){
        $('.popup_call .popup_title').text($(this).data('title'));

        $('.popup_call input[name="popup_title"]').val($(this).data('title'));

        $('.popup_call').fadeIn();
        $('.popup_call_bg').fadeIn();

        $('.popup_call_bg, .popup_close').click(function(){
            $('.popup_call').fadeOut();
            $('.popup_call_bg').fadeOut();
        });
        return false
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
                center: [55.61578478, 37.44836567],
                zoom: 13,
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

            myPlacemark = new ymaps.Placemark([55.61578478, 37.44836567], {
                hintContent: 'Адмирала Корнилова',
                balloonContent: 'Адмирала Корнилова'
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
