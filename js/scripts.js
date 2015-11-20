$(document).ready(function(){
    var websitedata = null;
    $.ajax({
        'async': true,
        'global': false,
        'url': "websitedata.json",
        'dataType': "json",
        'success': function (data) {
            websitedata = data;
            alert(websitedata);
            console.log(websitedata);
        },
        'error': function (a,b,c) { alert(b); }
    });
});
