$(function(){
	
	// $('header a, .main_button button').click(function(){
 //        var link = $(this).attr('href');
 //        var coordinats = $(link).offset().top;
 //        $('html, body').animate({scrollTop:coordinats}, 1000);
 //        return false;
 //    });

 //    new WOW().init();

    $('#layerslider').layerSlider({
        skinsPath : 'layerslider/skins/',
		skin : 'fullwidth',
        responsive : true,
        showCircleTimer: false,
        autoStart: true
	});
});


