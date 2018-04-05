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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [45.11661589, 39.01136908],
            zoom: 15,
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

        myPlacemark = new ymaps.Placemark([45.11690961, 38.99750725], {
            hintContent: 'Адрес компании РСК',
            balloonContent: 'Адрес компании РСК'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/about/marker-1.png',
            // Размеры метки.
            iconImageSize: [46, 76],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([45.11621007, 39.02903250], {
            hintContent: 'Адрес ЖК “Калинино Парк”',
            balloonContent: 'Адрес ЖК “Калинино Парк”',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/about/marker-2.png',
            // Размеры метки.
            iconImageSize: [46, 76],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
