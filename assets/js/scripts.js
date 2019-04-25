$(window).scroll(function(){
    scrollFunction();
})

$(document).ready(function(){
    scrollFunction();
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }
}