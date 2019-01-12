$(function(){

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
         $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

    // $('header nav >ul >li').each(function(){
    //     if($(this).find('ul').length > 0){
    //         $(this).addClass('dropdown');
    //     }
    // });

    // $('.toggle__menu >li').each(function(){
    //     if($(this).find('ul').length > 0){
    //         $(this).addClass('dropdown');
    //     }
    // });

    // $('.dropdown__menu >li').each(function(){
    //     if($(this).find('ul').length > 0){
    //         $(this).addClass('dropdown-sub');
    //     }
    // });

    $('.dropdown >a').click(function(){
        $(this).toggleClass('active');
        $('.dropdown__menu').toggleClass('active');
    });
    $('.dropdown-sub >a').click(function(){
        $(this).toggleClass('active');
        $('.dropdown-sub__menu').toggleClass('active');
    });

    $('.dropdown1 >a').click(function(){
        $(this).toggleClass('active');
        $('.dropdown1__menu').toggleClass('active');
    });
    $('.dropdown1-sub >a').click(function(){
        $(this).toggleClass('active');
        $('.dropdown1-sub__menu').toggleClass('active');
    });

    $('.toggle__nav').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('.basket').click(function(){
        $(this).toggleClass('active');
        $('.basket__drop').toggleClass('active');
    });

    $('.toggle__search').click(function(){
        $(this).toggleClass('active');
        $('.toggle-search').toggleClass('active');
    });

    $('.panel').click(function(){
        $(this).toggleClass('active');
        $('.panel__drop').toggleClass('active');
    });

    $('#da-slider').cslider({
        autoplay    : true,
        bgincrement : 450
    });

    /* timer */
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
     
      function updateClock() {
        var t = getTimeRemaining(endtime);
     
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
     
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
     
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
     
    var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
    
    var el = $("#clockdiv").html();
    if (el != null) {  
    initializeClock('clockdiv', deadline);
    }

    //tabs
    $('.product-js').each(function(){
        var $TabBlock = $('.product__wrap ul', this);
        var $TabBtn = $('.product__tabs li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).fadeIn().siblings().hide();
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();
    });

    //tabs
    $('.item__tabs').each(function(){
        var $TabBlock = $('.item__info li', this);
        var $TabBtn = $('.item__tab li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).fadeIn().siblings().hide();
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();
    });

    // castom select header
    var mySettings = {
        key : true,
        dropBlock : $('.drop'),
        virtualSelect : $('.select-wrap')
    }
    mySettings.virtualSelect.click(function(){
        if( mySettings.dropBlock.is(':hidden') ) {
            mySettings.dropBlock.slideDown();
            $(this).addClass('active');
        } 
        else {
            mySettings.dropBlock.slideUp();
            $(this).delay(600).queue(function(nextJ){
                $(this).removeClass("active");
                nextJ();
            });
        }
        return false;
    }); 
    mySettings.dropBlock.find('li').click(function(){
        var selectResult = $(this).html();
        $(this).parent().parent().find('input').val(selectResult);
        mySettings.dropBlock.slideUp();             
        mySettings.virtualSelect.delay(600).queue(function(nextJs){
            $(this).removeClass("active");
            nextJs();
        }).html(selectResult);
        return false;
    }); 
    $(document).click(function(event) {
        if(mySettings.key && !$(event.target).closest(mySettings.dropBlock).length){
            mySettings.dropBlock.slideUp();
            mySettings.virtualSelect.delay(600).queue(function(nextJs){
                $(this).removeClass("active");
                nextJs();
            });
            mySettings.key = true; 
            return;
        }   
    });

    $('.select .drop li').trigger('click');

    $('.item__calc .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.item__calc .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $("#slider").slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) );

    $('.action').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.related__cards').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.prev-img').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    //popup
    $('.popup_open').click(function(){
       $('.popup').fadeIn();
       $('.popup_bg').fadeIn();

       $('.popup_bg, .popup_close').click(function(){
           $('.popup').fadeOut();
           $('.popup_bg').fadeOut();
       });
       return false
    });
});