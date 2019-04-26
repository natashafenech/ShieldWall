$(window).scroll(function () {
    scrollFunction();
})

$(document).ready(function () {
    scrollFunction();

    setTimeout(function () {
        $("#header-watermark").addClass('load');
    }, 0);
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }

    $('section').each(function () {
        var data = $(this).data('id');

       

        if ($(this).offset().top < window.pageYOffset + (window.innerHeight/2) && $(this).offset().top + $(this).height() > window.pageYOffset + (window.innerHeight/2)) {
            if ($(this).hasClass('load-inner')) {
                $(this).addClass('load');
            }
        }
    });
}