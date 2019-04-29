$(window).scroll(function () {
    scrollFunction();
})

$(document).ready(function () {
    scrollFunction();

    setTimeout(function () {
        $("#header-watermark").addClass('load');
    }, 0);

    $('.navbar a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var today = new Date();
    var dayName = days[today.getDay()];

    $("#timetable .col-day-" + dayName).addClass('today').addClass('accordian-open');

    $(".cell-day").click(function(){
        $(".accordian-open").removeClass("accordian-open");
        $(this).parents(".col-day").addClass("accordian-open");
    })
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }

    $('section').each(function () {
        var data = $(this).data('id');

        if ($(this).offset().top < window.pageYOffset + (window.innerHeight / 2) && $(this).offset().top + $(this).height() > window.pageYOffset + (window.innerHeight / 2)) {
            if ($(this).hasClass('load-inner')) {
                $(this).addClass('load');
            }
        }
    });
}