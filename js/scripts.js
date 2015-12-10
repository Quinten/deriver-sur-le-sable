$(document).ready(function(){

    if (location.hash == '') {
        location.hash = '#home'; // default is #home
    }

    $('*').removeClass('active');
    $(location.hash).addClass('active');
    $('a[href="' + location.hash + '"]').addClass('active');

    $('a').click(function (e) {
        var href = $(this).attr('href');
        if (href.charAt(0) == '#') {
            $('*').removeClass('active');
            $(href).addClass('active');
            $(this).addClass('active');
        }
    });

    $('img').each(function (index) {
        var ran = Math.random();
        $(this).attr('style', '-webkit-transition-delay: '+ran+'s; transition-delay: '+ran+'s;');
    });
});
