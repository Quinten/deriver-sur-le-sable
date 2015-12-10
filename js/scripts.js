$(document).ready(function(){
    
    if (location.hash != '') {
        $('.page').removeClass('active');
        $(location.hash).addClass('active');
        $('nav a').removeClass('active');
        $('nav a[href="' + location.hash + '"]').addClass('active');
    }

    $('nav a').click(function (e) {
        $('.page').removeClass('active');
        $($(this).attr('href')).addClass('active');
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('img').each(function (index) {
        var ran = Math.random();
        $(this).attr('style', '-webkit-transition-delay: '+ran+'s; transition-delay: '+ran+'s;');
    });
});
