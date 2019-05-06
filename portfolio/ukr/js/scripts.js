$(document).ready(function(){

// castom select language for a start page
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

// select phone for a start page
    $('.select .drop li').trigger('click');

    var mySettingsPhone = {
        key : true,
        dropPhone : $('.drop__phone'),
        virtualSelectPhone : $('.phone-wrap')
    }
    mySettingsPhone.virtualSelectPhone.click(function(){
        if( mySettingsPhone.dropPhone.is(':hidden') ) {
            mySettingsPhone.dropPhone.slideDown();
            $(this).addClass('active');
        } 
        else {
            mySettingsPhone.dropPhone.slideUp();
            $(this).delay(600).queue(function(nextJ){
                $(this).removeClass("active");
                nextJ();
            });
        }
        return false;
    }); 
    mySettingsPhone.dropPhone.find('li').click(function(){
        var selectResult = $(this).html();
        $(this).parent().parent().find('input').val(selectResult);
        mySettingsPhone.dropPhone.slideUp();             
        mySettingsPhone.virtualSelectPhone.delay(600).queue(function(nextJs){
            $(this).removeClass("active");
            nextJs();
        }).html(selectResult);
        return false;
    }); 
    $(document).click(function(event) {
        if(mySettingsPhone.key && !$(event.target).closest(mySettingsPhone.dropPhone).length){
            mySettingsPhone.dropPhone.slideUp();
            mySettingsPhone.virtualSelectPhone.delay(600).queue(function(nextJs){
                $(this).removeClass("active");
                nextJs();
            });
            mySettingsPhone.key = true; 
            return;
        }   
    });
    // select phone for a start page
    $('.select__phone .drop__phone li').trigger('click');

});