$(function(){
    $('.menu_toggle').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    })
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
         $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},1000);

    });
});