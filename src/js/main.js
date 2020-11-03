"use strict";

window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header"),
        headerArrow = header.querySelector(".header__arrow"),
        headerList = header.querySelector(".header__list"),
        headerMenuClose = header.querySelector(".header__menu-close");
        
    // Header-menu navigation mobile
    function openHeaderList(className) {
        className.addEventListener("click", () => {
            headerList.classList.toggle("header__list--active");
            headerArrow.classList.toggle("header__arrow--off");
            headerMenuClose.classList.toggle("header__menu-close--active");
        });
    }

    openHeaderList(headerArrow);
    openHeaderList(headerMenuClose);
    //end Header-menu navigation mobile
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

    $(".header__btn").fancybox({});

    // lazy loading scroll script
    window.addEventListener("scroll", function(){ 
        const service = document.querySelector(".service"),
              infoLocation = document.querySelector(".info__location");

        let auxiliaryVariableScroll = 0,
            serviceTop = service.getBoundingClientRect().top,
            windowTop = window.pageYOffset;

        if (windowTop > serviceTop && auxiliaryVariableScroll === 0) {
            const qualityItem = document.querySelectorAll(".quality__item");
            qualityItem.forEach((item,i) => {
                item.classList.add("quality__item--" + i);
            });

            infoLocation.setAttribute(
                "src",
                "https://yandex.ru/map-widget/v1/?um=constructor%3A6c7dca2edfe12ca0e8707e8578c87c78fc74f6832f4ab07d8995fd6e3aacfb76&amp;source=constructor"
            );
            auxiliaryVariableScroll = 1;
            console.log ("auxiliaryVariableScrollddddd");
        }
    });
    //end lazy loading scroll script
    // lazy loading yandex metrika
    var fired = false;

    if (fired === false) {
        fired = true;

        setTimeout(() => {
            (function (m, e, t, r, i, k, a) {
                m[i] =
                    m[i] ||
                    function () {
                        (m[i].a = m[i].a || []).push(arguments);
                    };
                m[i].l = 1 * new Date();
                (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
            })(
                window,
                document,
                "script",
                "https://mc.yandex.ru/metrika/tag.js",
                "ym"
            );

            ym(68089741, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            });
        }, 1000);
    }
    //end lazy loading yandex metrika

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
