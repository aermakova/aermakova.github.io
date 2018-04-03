$(function(){
 
    $('.nav_title').click(function(){
        $(this).toggleClass('active');
        $('nav').slideToggle();
    });

    $('.info').each(function(){
		var $TabBlock = $('.info_desc_client div', this);
		var $TabBtn = $('.info_buttons li', this);
 
        $TabBtn.click(function(){
            $TabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
	});
    $('.popup-content').magnificPopup({
        type: 'inline',
        removalDelay: 350,
        mainClass: 'mfp-fade',
        fixed: false,
        autoCenter: true
    });
});