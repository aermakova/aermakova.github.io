;(function($){

  	jQuery.fn.sendFormLP = function(options){

  		options = $.extend({
            toEmail: 'itrbp880@gmail.com, 0508@mail.ru',
            fromEmail: 'itrbp880@gmail.com',
            interval : 5000
        }, options);

	    var make = function(){
	      
	    	$(this).submit(function(e){
	        	e.preventDefault();

	        	var $this = $(this);

	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            var objHide = $this.data('hide')
	            var btn = $('.dawnload_btn');

	            $items.removeClass('error');

	            $required.each(function(){
	            	if($(this).val() == '' && this.name != "check"){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            	else if(!$(this).is(':checked') && this.name == "check"){
	            		i = false
	            		$(this.nextElementSibling).addClass('error');
	            	}
	            });

	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            btn.click();

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });

		            var m_data = '';

		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }
		            
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();
		                    $(objHide).hide();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });

	    };
	 
	    return this.each(make); 

  	};

})(jQuery);

$(function(){

	$('form').sendFormLP({
		toEmail: 'itrbp880@gmail.com, 0508@mail.ru',
		fromEmail: 'itrbp880@gmail.com',
		interval: 5000
	});

});
