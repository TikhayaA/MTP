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
                menuArrows.forEach((item, index) => {
                    if(i !== index) {
                        item.parentElement.classList.remove('active');
                    }
                });
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

if (mobileOpen.length > 0) {
    mobileOpen[0].addEventListener('click', () => {
        menuMobile[0].classList.add('menu_active');
        mobileBg[0].classList.add('menu-mobile__bg_active');
    });
    mobileClose[0].addEventListener('click', () => {
        menuMobile[0].classList.remove('menu_active');
        mobileBg[0].classList.remove('menu-mobile__bg_active');
    });
}

const openSidebar = document.getElementsByClassName("open_sidebar");
const tableFilter = document.getElementsByClassName("table_filter");

if (openSidebar.length > 0) {
    openSidebar[0].addEventListener('click', () => {
        tableFilter[0].classList.toggle("active");
    });
}

// select style 

let selectSingle = document.querySelectorAll('.select');

selectSingle.forEach((el, index) => {

    let selectSingle_title = el.querySelector('.select__title');
    let selectSingle_labels = el.querySelectorAll('.select__label');

    // Toggle menu 
    selectSingle_title.addEventListener('click', () => {
        selectSingle.forEach((element, i) => {
            console.log(element, index, i);
            if(index !== i) {
                element.setAttribute('data-state', '');
            }
        });
        if (el.getAttribute('data-state') === 'active') {
            el.setAttribute('data-state', '');
        } else {
            el.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option 
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            el.setAttribute('data-state', '');
        });
    }
    document.body.onclick = function(e) {
        e = e || event;
        target = e.target || e.srcElement;
        if (target.className !== "select__title") {
            el.setAttribute('data-state', '');
        }
    }
});


const openOrder = document.getElementById('order-popup');
const popupOrder = document.getElementsByClassName('create-order');
const openOrderList = document.getElementById('open_order_list');
const popupOrderId = document.getElementsByClassName('order-id');
const popuoClose = document.getElementById('popup-close');

if(popupOrder.length > 0) {
    openOrder.addEventListener('click', () => {
        popupOrder[0].classList.toggle('create-order_active');
    });
    openOrderList.addEventListener('click', () => {
        popupOrder[0].classList.remove('create-order_active');
        popupOrderId[0].classList.add('order-id_active');
    });
    popuoClose.addEventListener('click', () => {
        popupOrderId[0].classList.remove('order-id_active');
    });
}
