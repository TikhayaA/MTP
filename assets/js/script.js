/* jshint esversion: 6 */
// "use strict"

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
    }, 
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()){
    document.body.classList.add('touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0){
        for (let i = 0; i < menuArrows.length; i++) {
            let menuArrow = menuArrows[i];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('active');
            });
        }
    }

}else{
    document.body.classList.add('pc');
}

let menuMobile = document.getElementsByClassName('menu');
let mobileBg = document.getElementsByClassName('menu-mobile__bg');
let mobileOpen = document.getElementsByClassName('menu-mobile__open');
let mobileClose = document.getElementsByClassName('menu-mobile__close');

    mobileOpen[0].addEventListener('click', () => {
        menuMobile[0].classList.add('menu_active');
        mobileBg[0].classList.add('menu-mobile__bg_active');
    });
    mobileClose[0].addEventListener('click', () => {
        menuMobile[0].classList.remove('menu_active');
        mobileBg[0].classList.remove('menu-mobile__bg_active');
    });



