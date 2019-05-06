$(function(){

    $('.menu_toggle').click(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('header nav').slideUp();
        }
        else{
        $(this).addClass('active');
        $('header nav').slideDown();
        }
    });

    $('header nav >ul >li').each(function(){
        if($(this).find('ul').length > 0){
            $(this).addClass('dropdown_menu');
        }
    });

    $('li.dropdown_menu').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').find('ul').slideUp();
            console.log('menu_open');
        }
        else{
            $(this).addClass('active').find('ul').slideDown();
            console.log('menu_close');
            return false;
        }
    });

    $('.slider').each(function(){
        var $li = $('.main_slider ul li', this);
        var $pag = $('.pagers ul li', this);

        $pag.click(function(){
            $li.eq($(this).index()).fadeIn().siblings().hide();
            $li.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');

        }).first().click();

        setInterval(function(){
            var index = $pag.filter('.active').index();
            if(index == $pag.length-1){
                index = -1
            }

            $pag.eq(index-1).click();
        },5000);
    });

    $('.works').each(function(){

        var $tabBlock = $('.works_carts ul', this);
        var $prev = $('.tabs_arr .prev', this);
        var $next = $('.tabs_arr .next', this);

        $tabBlock.eq(0).addClass('active');
        
        $prev.click(function(){
            var index = $tabBlock.filter('.active').index();
            if(index == 0){
                index = $tabBlock.length
            }
            $tabBlock.eq(index-1).addClass('active').siblings().removeClass('active');
           
        });

        $next.click(function(){
            var index = $tabBlock.filter('.active').index();
            if(index == $tabBlock.length-1){
                index = -1
            }
            $tabBlock.eq(index+1).addClass('active').siblings().removeClass('active');
        });
    });

    $('.fancy').fancybox();

    $('.portfolio').each(function(){

        var $tabBtn = $('.portfolio_tabs span', this);
        var $tabBlock = $('.portfolio_carts', this);

        $tabBtn.click(function(){
            $tabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();
    });
});