$(function () {
    var owl = $(".slide-one");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: false
    });
});

$(document).ready(function () {
    $(".slide-two").owlCarousel({
        items: 3,
        margin: 10,
        dots: false,
        loop: false,
        nav: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            1024:{
                items:2
            },
            1366:{
                items:3
            },
            768:{
                items:2
            },
            360:{
                items:1
            },
            320:{
                items:1
            }
        }    
    });
});