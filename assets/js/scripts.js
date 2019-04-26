$(window).scroll(function(){
    scrollFunction();
})

$(document).ready(function(){
    scrollFunction();
    
    setTimeout(function(){
        $("#header-watermark").addClass('load');        
    }, 0);
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }
}