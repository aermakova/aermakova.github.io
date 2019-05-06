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

    $('.scroll_button').click(function(){
        var link = $(this).attr('href');
        var coordinats = $(link).offset().top;
        $('html, body').animate({scrollTop:coordinats}, 500);
        return false;
    });

    $('.popup-content').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true,
        fixedContentPos: false
    });

    $('.open_form').click(function(){
        $('.goods_popup .goods_title').text($(this).data('title'));
        $('.goods_popup').fadeIn();
        $('.popup_bg').fadeIn();

        $('.popup_bg, .popup_close').click(function(){
            $('.goods_popup').fadeOut();
            $('.popup_bg').fadeOut();
        });
        return false
    });

    $('.open_form1').click(function(){
        $('.goods_popup .title_popup').text($(this).data('title'));
        $('.goods_popup').fadeIn();
        $('.popup_bg').fadeIn();

        $('.popup_bg, .popup_close').click(function(){
            $('.goods_popup').fadeOut();
            $('.popup_bg').fadeOut();
        });
        return false
    });

    $('.open_popup').click(function(){
        $('.goods_popup .goods_title').text($(this).data('title'));

        $('.goods_popup input[name="goods_title"]').val($(this).data('title'));
      
        $('.goods_popup').fadeIn();
        $('.popup_bg').fadeIn();

        $('.popup_bg, .popup_close').click(function(){
            $('.goods_popup').fadeOut();
            $('.popup_bg').fadeOut();
        });
        return false
    });

    $('.thank').each(function(){
        $('.thank_close, .thank_bg').click(function(){
            $('.thank').fadeOut();
            $('.thank_bg').fadeOut();
        });
        return false
    });

    $('.open_popup2').click(function(){
        $('.goods_popup2 .goods_title').text($(this).data('title'));

        $('.goods_popup2 input[name="goods_title"]').val($(this).data('title'));
        $('.goods_popup2 .img1 img').attr('src', $(this).data('img1'));
        $('.goods_popup2 .img1 a').attr('href', $(this).data('img1'));
        $('.goods_popup2 .img2 img').attr('src', $(this).data('img2'));
        $('.goods_popup2 .img3 img').attr('src', $(this).data('img3'));
        $('.goods_popup2 .img4 img').attr('src', $(this).data('img4'));
      
        $('.goods_popup2').fadeIn();
        $('.popup_bg').fadeIn();

        $('.popup_bg, .popup_close').click(function(){
            $('.goods_popup2').fadeOut();
            $('.popup_bg').fadeOut();
        });
        return false
    });

    $('.slider_popup_slides').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.personal_data_open').click(function(){
        $('.personal_data_popup').fadeIn();
        $('.popup_personal_bg').fadeIn();

        $('.popup_personal_bg, .personal_data_close').click(function(){
            $('.personal_data_popup').fadeOut();
            $('.popup_personal_bg').fadeOut();
        });
        return false
    });

    $('.polit_data_open').click(function(){
        $('.polit_data_popup').fadeIn();
        $('.popup_polit_bg').fadeIn();

        $('.popup_polit_bg, .polit_data_close').click(function(){
            $('.polit_data_popup').fadeOut();
            $('.popup_polit_bg').fadeOut();
        });
        return false
    });

    $('.slider_popup').each(function(){
        var $li = $('.slider_popup_item', this);
        var $prev = $('.slider_popup_arr_left', this);
        var $next = $('.slider_popup_arr_right', this);
        var $now = $('.slider_popup_item.now',this);
        

        $prev.click(function(){
            var $li = $('.slider_popup_item');
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
            var $li = $('.slider_popup_item');
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
});

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
