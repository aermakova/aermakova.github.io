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

    $('.zk_apartment_option .zk_apartment_option_item').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="zk_apartment_option_prev"><img src="img/zk/prev.png"></span>',
        nextArrow: '<span class="zk_apartment_option_next"><img src="img/zk/next.png"></span>'
    });

    $('.zk_apartment_plans').each(function(){
        var $TabBlock = $('.zk_apartment_plans_block li', this);
        var $TabBtn = $('.zk_apartment_plans_tab li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).fadeIn().addClass('active').siblings().hide().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

});

(function($) {
$.fn.cascadeSlider = function(opt) {
    var $this = this,
        itemClass = opt.itemClass || 'cascade-slider_item',
        arrowClass = opt.arrowClass || 'cascade-slider_arrow',
        $item = $this.find('.' + itemClass),
        $arrow = $this.find('.' + arrowClass),
        itemCount = $item.length;

    var defaultIndex = 0;

    changeIndex(defaultIndex);

    $arrow.on('click', function() {
        var action = $(this).data('action'),
        nowIndex = $item.index($this.find('.now'));

        if(action == 'next') {
            if(nowIndex == itemCount - 1) {
            changeIndex(0);
            } else {
            changeIndex(nowIndex + 1);
            }
        } else if (action == 'prev') {
            if(nowIndex == 0) {
            changeIndex(itemCount - 1);
            } else {
            changeIndex(nowIndex - 1);
            }
        }

        $('.cascade-slider_dot').removeClass('cur');
        //$('.cascade-slider_dot').next().addClass('cur');
        });
    
        // add data attributes
        for (var i = 0; i < itemCount; i++) {
            $('.cascade-slider_item').each(function(i) {
                $(this).attr('data-slide-number', [i]);
            });
        }
    
        // dots
        $('.cascade-slider_dot').bind('click', function(){
        // add class to current dot on click
        $('.cascade-slider_dot').removeClass('cur');
        $(this).addClass('cur');

        var index = $(this).index();

        $('.cascade-slider_item').removeClass('now prev next');
        var slide = $('.cascade-slider_slides').find('[data-slide-number=' + index + ']');
        slide.prev().addClass('prev');
        slide.addClass('now');
        slide.next().addClass('next');

        if(slide.next().length == 0) {
            $('.cascade-slider_item:first-child').addClass('next');
        }

        if(slide.prev().length == 0) {
            $('.cascade-slider_item:last-child').addClass('prev');
        }
    });

    function changeIndex(nowIndex) {
        // clern all class
        $this.find('.now').removeClass('now');
        $this.find('.next').removeClass('next');
        $this.find('.prev').removeClass('prev');
        if(nowIndex == itemCount -1){
            $item.eq(0).addClass('next');
        }
        if(nowIndex == 0) {
            $item.eq(itemCount -1).addClass('prev');
        }

        $item.each(function(index) {
            if(index == nowIndex) {
            $item.eq(index).addClass('now');
            }
            if(index == nowIndex + 1 ) {
            $item.eq(index).addClass('next');
            }
            if(index == nowIndex - 1 ) {
            $item.eq(index).addClass('prev');
            }
        });
    }
};
    $('#cascade-slider').cascadeSlider({
    });

})(jQuery);

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
