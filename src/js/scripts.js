// $(window).scroll(function(){
//     $('.main_content').css({'top': -$(window).scrollTop()/3});
// });
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

    $('.mouse, nav a').click(function(){
        var link = $(this).attr('href');
        var coordinats = $(link).offset().top;
        $('html, body').animate({scrollTop:coordinats}, 1000);
        return false;
    });

    window.addEventListener('scroll', function(event) {
        let depth, layer, layers, movement, topDistance, translate3d, _i, _len;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll("[data-type='parallax']");
        for (_i = 0, _len = layers.length; _i < _len; _i++) {
            layer = layers[_i];
            depth = layer.getAttribute('data-depth');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }
    });
});
