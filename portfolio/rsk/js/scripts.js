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

    $('.info').each(function(){
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

    $('.popup_news').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.mortgage_popup').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.militari_mortgage_popup').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.maternal_capital_popup').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.instalments_popup').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.zk_apartment_option .zk_apartment_option_item').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="zk_apartment_option_prev"><img src="img/zk/prev.png"></span>',
        nextArrow: '<span class="zk_apartment_option_next"><img src="img/zk/next.png"></span>'
    });

    $('.albums_wrap_with_arr').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<span class="albums_wrap_arr_prev"><img src="img/zk/photoreports/prev.png"></span>',
        nextArrow: '<span class="albums_wrap_arr_next"><img src="img/zk/photoreports/next.png"></span>'
    });

    $('.zk_repair_item_example').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<span class="zk_apartment_option_prev"><img src="img/zk/prev.png"></span>',
        nextArrow: '<span class="zk_apartment_option_next"><img src="img/zk/next.png"></span>'
    });

    $('ul.liter_album_whith_arr').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<span class="liter_album_arr_prev liter_album_arr"></span>',
        nextArrow: '<span class="liter_album_arr_next liter_album_arr"></span>'
    });

    $('.stock_apartment .zk_apartment_option_item').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="zk_apartment_option_prev"><img src="img/zk/prev.png"></span>',
        nextArrow: '<span class="zk_apartment_option_next"><img src="img/zk/next.png"></span>'
    });

    $('.zk_infrast_info').each(function(){
        var $TabBlock = $('.zk_infrast_block-js', this);
        var $TabBtn = $('.zk_infrast_button-js', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    $('.zk_apartment_plans').each(function(){
        var $TabBlock = $('.zk_apartment_plans_block li', this);
        var $TabBtn = $('.zk_apartment_plans_tab li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).fadeIn().addClass('active').siblings().hide().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    $('.apartment_slider_container').each(function(){
        var $li = $('.apartment_slider_item', this);
        var $prev = $('.apartment_slider_arr_left', this);
        var $next = $('.apartment_slider_arr_right', this);
        var $now = $('.apartment_slider_item.now',this);
        

        $prev.click(function(){
            var $li = $('.apartment_slider_item');
            var index = $li.filter('.now').index();
            if(index == 0){
                index = $li.length
            }
            if(index == 1){
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq($li.length-1).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');

            }else if(index == 0)
            {
                $li.eq($li.length-1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('next').siblings().removeClass('next');
                $li.eq($li.length-2).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq(index-2).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');
            }
        });

        $next.click(function(){
            var $li = $('.apartment_slider_item');
            var index = $li.filter('.now').index();
            if(index == $li.length-2){
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(0).addClass('next').siblings().removeClass('next');

            }else if(index == $li.length-1)
            {
                $li.eq(0).addClass('now').siblings().removeClass('now');
                $li.eq(1).addClass('next').siblings().removeClass('next');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(index+2).addClass('next').siblings().removeClass('next');
            }
        });
    });

    $('.relocation_slider_reason1').each(function(){
        var $li = $('.slider_reason1_item', this);
        var $prev = $('.slider_reason1_arr_left', this);
        var $next = $('.slider_reason1_arr_right', this);
        var $now = $('.slider_reason1_item.now',this);
        

        $prev.click(function(){
            var $li = $('.slider_reason1_item');
            var index = $li.filter('.now').index();
            if(index == 0){
                index = $li.length
            }
            if(index == 1){
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq($li.length-1).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');

            }else if(index == 0)
            {
                $li.eq($li.length-1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('next').siblings().removeClass('next');
                $li.eq($li.length-2).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq(index-2).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');
            }
        });

        $next.click(function(){
            var $li = $('.slider_reason1_item');
            var index = $li.filter('.now').index();
            if(index == $li.length-2){
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(0).addClass('next').siblings().removeClass('next');

            }else if(index == $li.length-1)
            {
                $li.eq(0).addClass('now').siblings().removeClass('now');
                $li.eq(1).addClass('next').siblings().removeClass('next');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(index+2).addClass('next').siblings().removeClass('next');
            }
        });
    });

    $('.relocation_slider_reason2').each(function(){
        var $li = $('.slider_reason2_item', this);
        var $prev = $('.slider_reason2_arr_left', this);
        var $next = $('.slider_reason2_arr_right', this);
        var $now = $('.slider_reason2_item.now',this);
        

        $prev.click(function(){
            var $li = $('.slider_reason2_item');
            var index = $li.filter('.now').index();
            if(index == 0){
                index = $li.length
            }
            if(index == 1){
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq($li.length-1).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');

            }else if(index == 0)
            {
                $li.eq($li.length-1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('next').siblings().removeClass('next');
                $li.eq($li.length-2).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq(index-2).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');
            }
        });

        $next.click(function(){
            var $li = $('.slider_reason2_item');
            var index = $li.filter('.now').index();
            if(index == $li.length-2){
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(0).addClass('next').siblings().removeClass('next');

            }else if(index == $li.length-1)
            {
                $li.eq(0).addClass('now').siblings().removeClass('now');
                $li.eq(1).addClass('next').siblings().removeClass('next');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(index+2).addClass('next').siblings().removeClass('next');
            }
        });
    });

    $('.relocation_slider_reason3').each(function(){
        var $li = $('.slider_reason3_item', this);
        var $prev = $('.slider_reason3_arr_left', this);
        var $next = $('.slider_reason3_arr_right', this);
        var $now = $('.slider_reason3_item.now',this);
        

        $prev.click(function(){
            var $li = $('.slider_reason3_item');
            var index = $li.filter('.now').index();
            if(index == 0){
                index = $li.length
            }
            if(index == 1){
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq($li.length-1).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');

            }else if(index == 0)
            {
                $li.eq($li.length-1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('next').siblings().removeClass('next');
                $li.eq($li.length-2).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index-1).addClass('now').siblings().removeClass('now');
                $li.eq(index-2).addClass('prev').siblings().removeClass('prev');
                $li.eq(index).addClass('next').siblings().removeClass('next');
            }
        });

        $next.click(function(){
            var $li = $('.slider_reason3_item');
            var index = $li.filter('.now').index();
            if(index == $li.length-2){
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(0).addClass('next').siblings().removeClass('next');

            }else if(index == $li.length-1)
            {
                $li.eq(0).addClass('now').siblings().removeClass('now');
                $li.eq(1).addClass('next').siblings().removeClass('next');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');

            }else{
                $li.eq(index+1).addClass('now').siblings().removeClass('now');
                $li.eq(index).addClass('prev').siblings().removeClass('prev');
                $li.eq(index+2).addClass('next').siblings().removeClass('next');
            }
        });
    });

    $('.zk_repair_info').each(function(){
        var $TabBlock = $('.zk_repair_info_wrap div', this);
        var $TabBtn = $('.zk_repair_buttons li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    $('.client_payment').each(function(){
        var $TabBlock = $('.client_payment_desc li', this);
        var $TabBtn = $('.client_payment_buttons .client_payment_button-js', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    var groups = {};
    $('.photoreport_item_img').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
      
        if(!groups[id]) {
            groups[id] = [];
        } 
      
        groups[id].push( this );
    });

    $.each(groups, function() {
      
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled:true }
        })
    });

    $('.zk_info_galery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.repair_popup').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    var groups = {};
    $('.zk_liter_item_img').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
      
        if(!groups[id]) {
            groups[id] = [];
        } 
      
        groups[id].push( this );
    });

    $.each(groups, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled:true }
        })
    });

    $('.zk_liter').each(function(){
        var $TabBlock = $('.zk_liter_block_wrap ul', this);
        var $TabBtn = $('.zk_liter_tabs li', this);

        setTimeout(function() { 
            $TabBlock.hide().first().fadeIn();
        }, 5);
        setTimeout(function() { 
            $TabBlock.first().fadeIn();
        }, 0);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).fadeIn().siblings().hide();
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    var groups = {};
    $('.news_item_img').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
      
        if(!groups[id]) {
            groups[id] = [];
        } 
      
        groups[id].push( this );
    });

    $.each(groups, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled:true }
        })
    });
});

// ЯНДЕКС КАРТЫ
var myMap4;
var myMap3;
var myMap2;
var myMap;
ymaps.ready(function () {
    var el = $("#map").html();
    var el2 = $("#zk_map").html();
    var el3 = $("#zk_map3").html();
    var el4 = $("#contact_map").html();
    if (el != null) {  

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

        myPlacemark = new ymaps.Placemark([45.11698557, 38.99759308], {
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
            iconImageOffset: [-25, -65]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([45.11662028, 39.02905396], {
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
            iconImageOffset: [-20, -65],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
      
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    }
    else if (el2 != null){
        var myMap2 = new ymaps.Map('zk_map', {
            center: [45.11635550, 39.02797804],
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

        myPlacemarkWithContent = new ymaps.Placemark([45.11662028, 39.02905396], {
            hintContent: 'Адрес ЖК “Калинино Парк”',
            balloonContent: 'Адрес ЖК “Калинино Парк”'
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
            iconImageOffset: [-20, -65],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
      
        myMap2.geoObjects
            .add(myPlacemarkWithContent);
    }
    else if (el3 != null){
        var myMap3 = new ymaps.Map('zk_map3', {
            center: [45.11687033, 39.02710437],
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

        myPlacemarkWithContent = new ymaps.Placemark([45.11662028, 39.02905396], {
            hintContent: 'Адрес ЖК “Калинино Парк”',
            balloonContent: 'Адрес ЖК “Калинино Парк”'
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
            iconImageOffset: [-20, -65],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent1 = new ymaps.Placemark([45.11459310, 39.01894436], {
            hintContent: 'Детский сад',
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-1.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent2 = new ymaps.Placemark([45.11100736, 39.01984558], {
            hintContent: 'Детский сад',
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-1.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent3 = new ymaps.Placemark([45.11298259, 39.02585373], {
            hintContent: 'Детский сад',
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-1.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent4 = new ymaps.Placemark([45.12375393, 39.04338465], {
            hintContent: 'Детский сад',
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-1.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent5 = new ymaps.Placemark([45.12472613, 39.02072534], {
            hintContent: 'Детский сад',
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-1.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent6 = new ymaps.Placemark([45.11523892, 39.03173852], {
            hintContent: 'Детский сад',
            balloonContent: 'Детский сад'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-2.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent7 = new ymaps.Placemark([45.11415040, 39.02948786], {
            hintContent: 'Аптека',
            balloonContent: 'Аптека'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-2.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent8 = new ymaps.Placemark([45.11607993, 39.02442385], {
            hintContent: 'Аптека',
            balloonContent: 'Аптека'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-2.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent9 = new ymaps.Placemark([45.11615590, 39.02764250], {
            hintContent: 'Аптека',
            balloonContent: 'Аптека'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-3.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent10 = new ymaps.Placemark([45.10798153, 39.02221371], {
            hintContent: 'Магазин',
            balloonContent: 'Магазин'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-5.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent11 = new ymaps.Placemark([45.11023036, 39.01873756], {
            hintContent: 'Почта',
            balloonContent: 'Почта'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/zk/infrastructure/marker-4.png',
            iconImageSize: [46, 56],
            iconImageOffset: [-20, -50],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        });
      
        myMap3.geoObjects
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent1)
            .add(myPlacemarkWithContent2)
            .add(myPlacemarkWithContent3)
            .add(myPlacemarkWithContent4)
            .add(myPlacemarkWithContent5)
            .add(myPlacemarkWithContent6)
            .add(myPlacemarkWithContent7)
            .add(myPlacemarkWithContent8)
            .add(myPlacemarkWithContent9)
            .add(myPlacemarkWithContent10)
            .add(myPlacemarkWithContent11);
    }
    else if (el4 != null){
        var myMap4 = new ymaps.Map('contact_map', {
            center: [45.11692480, 39.01328703],
            zoom: 14.3,
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

        myPlacemark = new ymaps.Placemark([45.11698557, 38.99759308], {
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
            iconImageOffset: [-25, -65]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([45.11662028, 39.02905396], {
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
            iconImageOffset: [-20, -75],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
      
        myMap4.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    }
});
