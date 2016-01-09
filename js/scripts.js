/*
 * Navigation script
 */

function changeActiveTo(hash) {
    $('*').removeClass('active');
    $(hash).addClass('active');
    $('a[href="' + hash + '"]').addClass('active');
    $('section').hide();
    $('section.active').show();
}

window.onpopstate = function (e) {
    changeActiveTo(location.hash);
}

$(document).ready(function(){

    $('a').click(function (e) {
        var href = $(this).attr('href');
        if (href.charAt(0) == '#') {
            e.preventDefault();
            history.pushState({hash: href}, "Dummy Title", href);
            $('*').removeClass('active');
            setTimeout(function () {
                window.scrollTo(0, 0);
                changeActiveTo(href);
            }, 500);
        }
    });

    if (location.hash == '') {
        location.hash = '#home'; // default is #home
    }

    var nLoaded = 0;
    var totalImg = $('img').length;
    function checkLoaded(e) {
        $(this).addClass($(this).width() + 'x' + $(this).height());
        nLoaded++;
        if (nLoaded === totalImg) {
            changeActiveTo(location.hash);
        }
    }
    $('img').each(function (index) {
        var ran = Math.random();
        $(this).attr('style', '-webkit-transition-delay: '+ran+'s; transition-delay: '+ran+'s;');
        this.onload = checkLoaded;
    });

});
