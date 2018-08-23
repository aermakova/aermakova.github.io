$(function(){

	$('.cards_block').each(function(){
		var $card = $('.card');

		$card.click(function(){
			if($(this).hasClass('card-disabled') == true){
                return false;
            }
            if($(this).hasClass('card-checked') == true){

                $('.card_subtitle', this).html('Сказочное заморское яство');
                $(this).removeClass('card-hover');
            }
            $(this).toggleClass('card-checked');
            $(this).find('.card_link').toggleClass('link-invisible');
		});
	});

	$('.card-disabled', this).each(function(){
		var $cardCategory = $(this).find('.card_title span');
		var $link = $(this).find('.card_link');

		$link.text('Печалька, ' + $cardCategory.text() + ' закончился.');
	});

     $('.card').mouseleave(function(){
     	if ($(this).hasClass('card-checked') == true){
		$(this).addClass('card-hover');
	        $('.card_subtitle', this).html('Котэ не одобряет?');
     	}
	});
});

