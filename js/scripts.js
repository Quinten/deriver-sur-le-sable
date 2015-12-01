$(document).ready(function(){
    
    if (location.hash != '') {
        $('.page').removeClass('active');
        $(location.hash).addClass('active');
    }

    $('nav a').click(function (e) {
        $('.page').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });
});
