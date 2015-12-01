$(document).ready(function(){
    
    alert(location.hash);

    $('nav a').click(function (e) {
        $('.page').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });
});
