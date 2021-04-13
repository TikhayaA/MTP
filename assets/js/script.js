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
if (window.screen.width < 1050) {
    document.body.classList.add('touch');
}
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

const btnDelete = document.querySelectorAll('.btn-delete');
const popUpDelete = document.getElementsByClassName('pop-up-delete');
const popUpDeleteBtnNo = document.getElementsByClassName('pop-up-delete__btn_no');

if (btnDelete.length > 0) {   
    btnDelete.forEach((element, i) => {
        element.addEventListener('click', () => {
            popUpDelete[0].classList.add('pop-up-delete_active');
            mobileBg[0].classList.add('menu-mobile__bg_active');
        });
        console.log(popUpDelete);
    }) ;
    popUpDeleteBtnNo[0].addEventListener('click', () => {
        popUpDelete[0].classList.remove('pop-up-delete_active');
        mobileBg[0].classList.remove('menu-mobile__bg_active');

    });
}

const popUpMessage = document.getElementsByClassName('pop-up-message'),
      mailOpen = document.querySelector('.header-authorized__mail'),
      popupMailClose = document.querySelector('#popup-mail-close'),
      popUpOpenSringWrap = document.querySelector('.pop-up-message__wrap-string'),
      openMessage = document.getElementsByClassName('message-wrap');
      popUpOpenSring = document.getElementsByClassName('pop-up-message__string');
if(popUpMessage.length > 0) {
      mailOpen.addEventListener('click', () => {
        popUpMessage[0].classList.add('pop-up-message_open');
        mobileBg[0].classList.add('menu-mobile__bg_active');
        menuMobile[0].classList.remove('menu_active');
    });
    popupMailClose.addEventListener('click', () => {
        popUpMessage[0].classList.remove('pop-up-message_open');
        mobileBg[0].classList.remove('menu-mobile__bg_active');
    });
    popUpOpenSring[0].addEventListener('click', () => {
        openMessage[0].classList.add('message-wrap_active');
        popUpOpenSringWrap.classList.add('pop-up-message__wrap-string_disabled');
    });
}
        

    // password-show 

let passwordInput = document.getElementById('password');
let showPass = document.getElementsByClassName('display-password');

function togglePasswordInput(i) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

let NewshowPass = Object.values(showPass);
NewshowPass.forEach(function(element, i) {
    element.addEventListener("click", () => {
        togglePasswordInput(i);
    });
    console.log(passwordInput);
    passwordInput.oninput = function () {
        if (passwordInput.value) {
            element.classList.add('display-password_active');
        } else {
            element.classList.remove('display-password_active');
        }
    };
});

const quantityMinus = document.getElementById("quantity-minus");
const quantityValue = document.querySelector(".table-quantity__input_value");
const quantityPlus = document.getElementById("quantity-plus");
if (quantityValue) {
    quantityMinus.addEventListener('click', () => {
        quantityValue.value = +quantityValue.value - 1;
    });

    quantityPlus.addEventListener('click', () => {
        quantityValue.value = +quantityValue.value + 1;
    });
}

const orderString = document.querySelectorAll(".order__string"); 
const popupUserInfo = document.querySelectorAll(".popup-user-info"); 
const btnCloseUserInfo = document.getElementById('btn-close-user-info');
const viewInfo = document.querySelectorAll('.view-info');
const subMenuBtn = document.querySelectorAll('.show-bids .sub-menu');

if(orderString.length > 0) {
    orderString.forEach((el) => {
        el.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            subMenuBtn[0].classList.add('sub-menu-active');
            subMenuBtn[0].style.top = e.pageY + 'px';
            subMenuBtn[0].style.left = e.pageX + 'px';
        });
    });
    viewInfo[0].addEventListener('click', () => {
        popupUserInfo[0].classList.add('popup-user-info__active');
        subMenuBtn[0].classList.remove('sub-menu-active');
    });
    btnCloseUserInfo.addEventListener('click', () => {
        popupUserInfo[0].classList.remove('popup-user-info__active');
    });
}

const popUpLogIn = document.querySelectorAll('.pop-up-log-in'),
        openLogIn = document.querySelectorAll('.header__log-in'),
        closeBtnLogin = document.querySelectorAll('.close-btn-log-in'),
        logOut = document.querySelectorAll('.pop-up-log-out');
    if (openLogIn.length > 0) {
        openLogIn[0].addEventListener('click', () => {
            popUpLogIn[0].classList.add('pop-up-log-in_active');
            menuMobile[0].classList.remove('menu_active');
        });
    }
    if (closeBtnLogin.length > 0) {
        closeBtnLogin.forEach((element, i) => {
            element.addEventListener('click', () => {
            popUpLogIn[0].classList.remove('pop-up-log-in_active');
            logOut[0].classList.remove('pop-up-log-out_active');
            });
        });
    }


const createdBidsBtn = document.querySelectorAll('.created-bids .table-quantity__btn');
const createdBids = document.querySelectorAll('.created-bids');
const showBids = document.querySelectorAll('.show-bids');

if(createdBidsBtn.length > 0) {
    createdBidsBtn[0].addEventListener('click', () => {
        createdBids[0].classList.remove('created-bids_active');
        showBids[0].classList.add('show-bids_active');
    });
}