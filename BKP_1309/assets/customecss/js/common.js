$(document).ready(function() {
    var target = $(location).attr("hash");
    var res = target.split("#");
    if (res.length <= 2) {
        return false;
    }
    target = $('#' + res[(res.length) - 1]);
    target = target.length ? target : $('[name=' + ('#' + res[(res.length) - 1]) + ']');
    debugger;
    if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top }, 1000);
        return false;
    }
});