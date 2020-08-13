$(document).ready(function(){
    $(".services-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                loop:false
            }
        },
        rtl: true,
    });
    $(".customer-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
                loop:false
            }
        },
        rtl: true,
    });

});
