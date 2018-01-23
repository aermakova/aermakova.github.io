$(function(){

    $('.client').each(function(){
        var $li = $('.client_right ul li', this);
        var $pag = $('.client_pags ul li', this);
        var $prev = $('.client_left ul li', this);

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

    $('.menu_toggle').click(function(){
        if ($(this).hasClass('active')){
            $('header nav').removeClass('active');
            $(this).removeClass('active');
        }
        else{

        $('header nav').addClass('active');
        $(this).addClass('active');
        }
    });
});
