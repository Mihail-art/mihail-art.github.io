$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    $('.reviews-6').slick({
        dots: true,
        infinite: true,
        speed: 200,
        fade: false,
        cssEase: 'linear',
        adaptiveHeight: true
    });


});