// $(window).load(function () {
//   $(".loader").delay(100).fadeOut(250);
// });

$(window).scroll(function(){
    $('.main_content').css({'top': -$(window).scrollTop()/3});
});
// $(document).on('mousemove', function (e) {
//     $('.first').css({
//         left: -e.pageX / 10 + 100,
//         top: -e.pageY / 10 + 100
//     });
//     $('.second').css({
//         left: e.pageX / 50 + 200,
//         top: e.pageY / 50 + 200
//     });
// });
// $(document).ready(function(){
//     $('#scrollbar1').tinyscrollbar();
// });

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
    $('.mouse').click(function(){
        var link = $(this).attr('href');
        var coordinats = $(link).offset().top;
        $('html, body').animate({scrollTop:coordinats}, 1000);
        return false;
    });
});
