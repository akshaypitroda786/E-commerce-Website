$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".back-to-top-btn").fadeIn();
        } else {
            $(".back-to-top-btn").fadeOut();
        }
    });

    $(".back-to-top-btn").click(function () {
        $("body,html").animate(

            { scrollTop: 0 }
            , 1000
        );
    });

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 150) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $(".filter-2").click(function () {
        $(".product-gallary-2").addClass("product-gallary-2-show")
        $(".product-gallary").addClass("product-gallary-hidden")
        $(".filter-2").addClass("filter-2-active")
        $(".filter-left-li").removeClass("filter-1-active")
        $("body,html").animate(

            { scrollTop: 400 }
            , 1000
        );
    });

    $(".filter-1").click(function () {
        $(".filter-1").addClass("filter-1-active")
        $(".filter-left-li").removeClass("filter-2-active")
        $(".product-gallary-2").removeClass("product-gallary-2-show")
        $(".product-gallary").removeClass("product-gallary-hidden")
        $("body,html").animate(

            { scrollTop: 400 }
            , 1000
        );
    });

    $('.slider-1.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplayTimeout:2000,
        autoplay: true,
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:1,

            },
            1000:{
                items:1,

            }
        }
    })
    $('.slider-2.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 4,
        autoplay: true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:2,
            },
            768:{
                items:2,
            },
            991:{
                items:3,
            },
            1300:{
                items:4,
            }
        }
    })
    $('.slider-3.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 1,
        autoplay: true,
        dots:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,

            },
            575:{
                items:1,

            },
            768:{
                items:1,

            },
            1000:{
                items:1,

            }
        }
    })

    $(".mobile-view-btn").click(function(){
        $(".navigation-menu-ul").toggleClass("mobile-view-active");
    });
});


