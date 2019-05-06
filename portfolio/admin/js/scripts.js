$(function(){

    $('.sidebar_button i').click(function(){
        $('div.sidebar').toggleClass('all_panel');
    });
    $('.top_block li.wallet').click(function(){
        $('.wallet_dropdown p').toggleClass('active');
    });
});