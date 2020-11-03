"use strict";

window.addEventListener("DOMContentLoaded", function () {
    const product = document.querySelector(".product"),
        productBtn = product.querySelector(".product__btn"),
        productDropdown = product.querySelector(".product__dropdown"),
        productBtnMenu = product.querySelector(".product__btn-menu"),
        productNav = product.querySelector(".product__nav");
    // Aside Navigation Menu Product
    productBtn.addEventListener("click", () => {
        productDropdown.classList.toggle("product__dropdown--active");
        productBtn.classList.toggle("product__btn--active");
    });

    productBtnMenu.addEventListener("click", () => {
        productNav.classList.toggle("product__nav--active");
        productBtn.classList.toggle("product__btn--fade");
    });
    //End Aside Navigation Menu Product
    // close navigation menu product
    window.addEventListener("scroll", () => {
        if (this.pageYOffset > 600) {
            productNav.classList.remove("product__nav--active");
            productBtn.classList.remove("product__btn--fade");
        }
    });
    //End close navigation menu product
});
