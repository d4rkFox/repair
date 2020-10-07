$(function () {
    var benefitSlider = new Swiper(".benefit__container", {
        effect: "cube",
        speed: 1000,
        cubeEffect: {
            shadowOffset: 2000,
            shadowScale: 0.5,
        },
        allowTouchMove: false,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".benefit__arrow-next",
            prevEl: ".benefit__arrow-prev",
        },
    });

    var reviews = new Swiper(".about-reviews__container", {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 320px
            1200: {
                slidesPerView: 4,
            },

            992: {
                slidesPerView: 3,
            },

            576: {
                slidesPerView: 2,
            },

            320: {
                slidesPerView: 1,
            },
        },
    });

    $(".product__btn").on("click", function () {
        $(".product__dropdown").toggleClass("product__dropdown--active");
        $(".product__btn").toggleClass("product__btn--active");
    });

    $(".product__btn-menu").on("click", function () {
        $(".product__nav").toggleClass("product__nav--active");
        $(".product__btn").toggleClass("product__btn--fade");
    });

    $(".header__arrow").on("click", function () {
        $(".header__list").toggleClass("header__list--active");
        $(this).toggleClass("header__arrow--off");
        $(".header__menu-close").toggleClass("header__menu-close--active");
    });

    $(".header__menu-close").on("click", function () {
        $(".header__list").toggleClass("header__list--active");
        $(".header__arrow").toggleClass("header__arrow--off");
        $(this).toggleClass("header__menu-close--active");
    });

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 600) {
            $(".product__nav").removeClass("product__nav--active");
        }
    });

    $(".header__btn").fancybox({});

    var auxiliaryVariableScroll = 0;
    var info = $(".service");
    var infoTop = info.offset().top;
    $(window).scroll(function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > infoTop && auxiliaryVariableScroll === 0) {
            $(".quality__item").each(function (i, quality__item) {
                $(quality__item).addClass("quality__item--" + i);
            });

            $(".info__location").attr(
                "src",
                "https://yandex.ru/map-widget/v1/?um=constructor%3A6c7dca2edfe12ca0e8707e8578c87c78fc74f6832f4ab07d8995fd6e3aacfb76&amp;source=constructor"
            );
            auxiliaryVariableScroll = 1;
        }
    });

    //E-mail Ajax Send==============================================================================
    $(".form, .popup__form").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize(),
        }).done(function () {
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    //Enf E-mail Ajax Send==========================================================================
});
