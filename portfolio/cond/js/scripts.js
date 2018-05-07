$(function(){

    $('.review').each(function(){
        var $li = $('.review_item', this);
        var $pagers = $('.pagers', this);

        $li.each(function(){
            $pagers.append('<span />');
        });

        var $pag = $pagers.find('span');

        $pag.click(function(){
            $li.eq($(this).index()).fadeIn().siblings().hide();
            $(this).addClass('active-js').siblings().removeClass('active-js');

        }).first().click();

        setInterval(function(){
            var index = $pag.filter('.active-js').index();
            if(index == $pag.length-1){
                index = -1
            }

            $pag.eq(index-1).click();
        },5000);
    });

    $('.catalog .item_slide').each(function(){
        var $mainSlide = $('.main_img img', this);
        var $prevSlide = $('.prev_img .prev_item', this);
 
        $prevSlide.mousemove(function(){
            $mainSlide.eq($(this).index()).addClass('active').siblings().removeClass('active');
        });
    });

    $('.catalog').each(function(){
        var $TabBlock = $('.catalog_block .catalog_item', this);
        var $TabBtn = $('.catalog_btns .btn_item', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();
    });

    $('.popup-content').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.open_popup').click(function(){
        $('.goods_popup .goods_title').text($(this).data('title'));

        $('.popup input[name="goods_title"]').val($(this).data('title'));
      
        $('.goods_popup').fadeIn();
        $('.popup_bg').fadeIn();

        $('.popup_bg, .popup_close').click(function(){
            $('.goods_popup').fadeOut();
            $('.popup_bg').fadeOut();
        });
        return false
    });

    $('.personal_data_open').click(function(){
        $('.personal_data_popup').fadeIn();
        $('.popup_bg').fadeIn();

        $('.popup_bg, .personal_data_close').click(function(){
            $('.personal_data_popup').fadeOut();
            $('.popup_bg').fadeOut();
        });
        return false
    });
});

// ЯНДЕКС КАРТЫ
// var myMap;
// ymaps.ready(function () {
//     var el = $("#map").html();
//     if (el != null) {  

//         var myMap = new ymaps.Map('map', {
//                 center: [45.11661589, 39.01136908],
//                 zoom: 15,
//                 controls: []
//             }, {
//                 searchControlProvider: 'yandex#search'
//             },
//                 {suppressMapOpenBlock: true}
//             ),

//             // Создаём макет содержимого.
//             MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//                 '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//             ),

//             myPlacemark = new ymaps.Placemark([45.11698557, 38.99759308], {
//                 hintContent: 'Адрес компании РСК',
//                 balloonContent: 'Адрес компании РСК'
//             }, {
//                 // Опции.
//                 // Необходимо указать данный тип макета.
//                 iconLayout: 'default#image',
//                 style: "default#redSmallPoint"
//             });
      
//         myMap.geoObjects
//             .add(myPlacemark);
//     }
// });
