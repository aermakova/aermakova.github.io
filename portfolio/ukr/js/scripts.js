$(document).ready(function(){

 // castom select
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
            $(this).delay(400).queue(function(nextJ){
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
        mySettings.virtualSelect.delay(400).queue(function(nextJs){
            $(this).removeClass("active");
            nextJs();
        }).html(selectResult);
        return false;
    }); 
    $(document).click(function(event) {
        if(mySettings.key && !$(event.target).closest(mySettings.dropBlock).length){
            mySettings.dropBlock.slideUp();
            mySettings.virtualSelect.delay(400).queue(function(nextJs){
                $(this).removeClass("active");
                nextJs();
            });
            mySettings.key = true; 
            return;
        }   
    });

    // language for a start page
    $('.language .drop li').trigger('click');

});