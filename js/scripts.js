/*
 * Navigation script
 */

function changeActiveTo(hash) {
    $('*').removeClass('active');
    $(hash).addClass('active');
    $('a[href="' + hash + '"]').addClass('active');
}

window.onpopstate = function (e) {
    changeActiveTo(location.hash);
}

$(document).ready(function(){

    if (location.hash == '') {
        location.hash = '#home'; // default is #home
    }

    changeActiveTo(location.hash);

    $('a').click(function (e) {
        var href = $(this).attr('href');
        if (href.charAt(0) == '#') {
            changeActiveTo(href);
        }
    });

    $('img').each(function (index) {
        var ran = Math.random();
        $(this).attr('style', '-webkit-transition-delay: '+ran+'s; transition-delay: '+ran+'s;');
    });
});
