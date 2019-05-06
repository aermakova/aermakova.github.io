$(function(){

    $('.fancy').fancybox();

    $(window).scroll(function(){
        if($('.category_cards').length > 0){
            
            if($(window).scrollTop() > $('.category_cards').offset().top - 200){
                $('.aside_toggle').addClass('show');
            }
            else{
                $('.aside_toggle').removeClass('show');
            }
        }
    });

    $('.select select').jselector();

    $('.menu_toggle').click(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.main_menu nav').slideUp();
        }
        else{
        $(this).addClass('active');
        $('.main_menu nav').slideDown();
        }
    });
    
    $('.main_menu nav >ul >li').each(function(){
        if($(this).find('ul').length > 0){
            $(this).addClass('dropdown_menu');
        }
    });

    $('.dropdown_menu >a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').siblings('ul').slideUp();
            return false;
        }
        else{
            $(this).addClass('active').siblings('ul').slideDown();
            return false;
        }
    });

    $('.main_slider').each(function(){
    	var $li = $('li', this);
    	var $pagers = $('.pagers', this);

    	$li.each(function(){
            $pagers.append('<span />');
    	});

    	var $pag = $pagers.find('span');

    	$pag.click(function(){
    		$li.eq($(this).index()).fadeIn().siblings().hide();
    		$(this).addClass('active').siblings().removeClass('active');

            var $this = $(this);

            setTimeout(function(){
            $li.eq($this.index()).find('.slide_text').addClass('active');
            $li.eq($this.index()).siblings().find('.slide_text').removeClass('active');
        }, 100);

    	}).first().click();

    	setInterval(function(){
            var index = $pag.filter('.active').index();
            if(index == $pag.length-1){
            	index = -1
            }

            $pag.eq(index-1).click();
    	},5000);
    });

    $('.tabs').each(function(){

    	var $tabBtn = $('.slider_tabs_items span', this);
    	var $prev = $('.slider_tabs_arr .prev', this);
    	var $next = $('.slider_tabs_arr .next', this);
    	var $tabBlock = $('.goods_cards .tab_block', this);

    	$tabBtn.click(function(){
    		$tabBlock.eq($(this).index()).fadeIn().addClass('active').siblings().hide().removeClass('active');
    		$(this).addClass('active').siblings().removeClass('active');
        }).first().click();

        $prev.click(function(){
            var index = $tabBtn.filter('.active').index();
            if(index == 0){
            	index = $tabBtn.length
            }
            $tabBtn.eq(index-1).click();
		});

		$next.click(function(){
            var index = $tabBtn.filter('.active').index();
            if(index == $tabBtn.length-1){
            	index = -1
            }
            $tabBtn.eq(index+1).click();
		});
    });

    $('.resent_blogs').each(function(){

        var $tabBlock = $('.resent_blogs_carts ul', this);
        var $prev = $('.slider_tabs_arr .prev', this);
        var $next = $('.slider_tabs_arr .next', this);

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

    $('.aside_toggle').click(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('aside').removeClass();
        }
        else{
        $(this).addClass('active');
        $('aside').addClass('active');
        }
    });

    $('.product_slide').each(function(){
        var $mainSlide = $('.product_img a', this);
        var $prevSlide = $('.product_block a', this);
        var $prev = $('.product_slider_arr .prev', this);
        var $next = $('.product_slider_arr .next', this);
 
        $prevSlide.click(function(){
            $mainSlide.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
            return false;
        }).first().click();

        $prev.click(function(){
            var index = $prevSlide.filter('.active').index();
            if(index == 0){
                index = $prevSlide.length
            }

            $prevSlide.eq(index-1).click();
           
        });

        $next.click(function(){
            var index = $prevSlide.filter('.active').index();
            if(index == $prevSlide.length-1){
                index = -1
            }

            $prevSlide.eq(index+1).click();
        });
    });

    $('.product_tabs').each(function(){
        var $btn = $('.tabs_btn span', this);
        var $block = $('.tab_blocks', this);

        $btn.click(function(){
            $block.eq($(this).index()).fadeIn().siblings().hide();
            $(this).addClass('active').siblings().removeClass('active');
        }).filter('.active').click();    
    });

    $('.related_products').each(function(){

        var $tabBlock = $('.resent_blogs_carts ul', this);
        var $prev = $('.slider_tabs_arr .prev', this);
        var $next = $('.slider_tabs_arr .next', this);

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
});