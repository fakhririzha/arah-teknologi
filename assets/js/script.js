$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scrolled');
        $('.logo-nav').addClass('logo-nav-white');
    } else {
        $('nav').removeClass('scrolled');
        $('.logo-nav').removeClass('logo-nav-white');
    }
})

$('.carousel').carousel({
    interval: 3500
})