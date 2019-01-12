$(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() < $('.join').offset().top - 500){
            $('.button_to_top').addClass('active');
        }
        else{
            $('.button_to_top').removeClass('active');
        }
    });

    $('.testimonial').each(function(){

        var $tabBlock = $('.testimonial_slider ul li', this);
        var $prev = $('.slider_tabs .prev', this);
        var $next = $('.slider_tabs .next', this);

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

        setInterval(function(){
            $next.click();
        }, 5000);
    });

    $('.button_to_top').click(function(){
        var link = $(this).attr('href');
        var coordinats = $(link).offset().top;
        $('html, body').animate({scrollTop:coordinats}, 500);
        return false;
    });

    $('header nav a').click(function(){
        var link = $(this).attr('href');
        var coordinats = $(link).offset().top;
        $('html, body').animate({scrollTop:coordinats}, 500);
        return false;
    });
});