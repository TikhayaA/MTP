/* jshint esversion: 6 */
// "use strict"

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
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
if (isMobile.any()) {
    document.body.classList.add('touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            let menuArrow = menuArrows[i];
            menuArrow.addEventListener("click", function(e) {
                menuArrows.forEach((item, index) => {
                    if (i !== index) {
                        item.parentElement.classList.remove('active');
                    }
                });
                menuArrow.parentElement.classList.toggle('active');
            });
        }
    }

} else {
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
            if (index !== i) {
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

if (popupOrder.length > 0) {
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
        });
    });
    popUpDeleteBtnNo[0].addEventListener('click', () => {
        popUpDelete[0].classList.remove('pop-up-delete_active');

    });
}

const popUpMessage = document.getElementsByClassName('pop-up-message'),
    mailOpen = document.querySelector('.header-authorized__mail'),
    popupBtnClose = document.querySelectorAll('.btn-close-popup'),
    popUpOpenSringWrap = document.querySelector('.pop-up-message__wrap-string'),
    openMessage = document.getElementsByClassName('message-wrap'),
    popUpOpenSring = document.getElementsByClassName('pop-up-message__string');
const messageBackArrow = document.querySelector('.pop-up-message__back-arrow');

if (popUpMessage.length > 0) {
    popUpOpenSring.forEach((el, ind) => {
        el.addEventListener('click', () => {
            openMessage[ind].classList.add('message-wrap_active');
            popUpOpenSringWrap.classList.add('pop-up-message__wrap-string_disabled');
            messageBackArrow.classList.add('active');
        });
    });
    messageBackArrow.addEventListener('click', () => {
        messageBackArrow.classList.remove('active');
        popUpOpenSringWrap.classList.remove('pop-up-message__wrap-string_disabled');
        openMessage.forEach(el => {
            el.classList.remove('message-wrap_active');
        });
    });
}


// password-show 

let passwordInput = document.getElementsByClassName('password');
let showPass = document.getElementsByClassName('display-password');

function togglePasswordInput(i) {
    if (passwordInput[i].type === "password") {
        passwordInput[i].type = "text";
    } else {
        passwordInput[i].type = "password";
    }
}

let NewshowPass = Object.values(showPass);
NewshowPass.forEach(function(element, i) {
    element.addEventListener("click", () => {
        togglePasswordInput(i);
    });
    passwordInput[i].oninput = function() {
        if (passwordInput[i].value) {
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
const showLastAttention = document.querySelectorAll('.show-last-attention');

if (orderString.length > 0) {
    orderString.forEach((el) => {
        el.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            subMenuBtn[0].classList.add('sub-menu-active');
            subMenuBtn[0].style.top = e.pageY + 'px';
            subMenuBtn[0].style.left = e.pageX + 'px';
        });
    });
    if (viewInfo.length > 0) {
        viewInfo[0].addEventListener('click', () => {
            popupUserInfo[0].classList.add('popup-user-info__active');
            subMenuBtn[0].classList.remove('sub-menu-active');
        });
        btnCloseUserInfo.addEventListener('click', () => {
            popupUserInfo[0].classList.remove('popup-user-info__active');
        });
    }
}

const createdBidsBtn = document.querySelectorAll('.created-bids .table-quantity__btn');
const createdBids = document.querySelectorAll('.created-bids');
const showBids = document.querySelectorAll('.show-bids');

if (createdBidsBtn.length > 0) {
    createdBidsBtn[0].addEventListener('click', () => {
        createdBids[0].classList.remove('created-bids_active');
        showBids[0].classList.add('show-bids_active');
        showLastAttention[0].style.display = "block";
    });
}

const tableBtnSell = document.querySelector(".table_btn-sell");
const tableBtnBuy = document.querySelector(".table_btn-buy");
const tableContentHeader = document.querySelector(".table_content-header");
const cargoOrderName = document.querySelector(".cargo-order-name");

if (tableBtnSell) {
    tableBtnSell.addEventListener('click', () => {
        tableContentHeader.classList.add('table__content_header-sell');
        tableContentHeader.classList.remove('table__content_header-buy');
        cargoOrderName.innerHTML = 'sell';
    });
}
if (tableBtnBuy) {
    tableBtnBuy.addEventListener('click', () => {
        tableContentHeader.classList.remove('table__content_header-sell');
        tableContentHeader.classList.add('table__content_header-buy');
        cargoOrderName.innerHTML = 'buy';
    });
}


// popup open function

const popUp = document.querySelectorAll('.pop-up'),
    popUpOpen = document.querySelectorAll('.pop-up-open'),
    popUpWrapper = document.querySelectorAll('.popup-wrapper'),
    closeCross = document.querySelectorAll('.close-cross-popup');


popUpOpen.forEach((element, i) => {
    element.addEventListener('click', () => {
        popUp.forEach(el => {
            el.classList.remove('pop-up_open');
        });
        let popUpElement = element.getAttribute('data-popup');
        document.querySelector(`.${popUpElement}`).classList.add('pop-up_open');
    });
});
closeCross.forEach((element, i) => {
    element.addEventListener('click', () => {
        popUp.forEach(el => {
            el.classList.remove('pop-up_open');
        });
        popUpWrapper.forEach(el => {
            el.classList.remove('pop-up_open');
        });
    });
});
popupBtnClose.forEach((element, i) => {
    element.addEventListener('click', () => {
        popUp.forEach(el => {
            el.classList.remove('pop-up_open');
        });
        popUpWrapper.forEach(el => {
            el.classList.remove('pop-up_open');
        });
    });
});

const radioBlockLeft = document.querySelector('.radio-block-left'),
    radioBlockRight = document.querySelector('.radio-block-right'),
    registrationLeft = document.querySelector('.pop-up-registration__left'),
    registrationRight = document.querySelector('.pop-up-registration__right'),
    popUpRegistration = document.querySelector('.pop-up-registration'),
    popUpRegistrationHeader = document.querySelector('.pop-up-registration__header'),
    popUpRegistrationContent = document.querySelector('.pop-up-registration__content'),
    agreeBlock = document.querySelector('.agree-block'),
    btnNext = document.querySelector('.btn-next'),
    btnCloseCompany = document.querySelector('.pop-up-registration__form .btn-close'),
    registrationCheck = document.querySelector('.pop-up-registration__check'),
    registrationField = document.querySelector('.pop-up-registration__fields'),
    registrationSteps = document.querySelector('.registration-steps'),
    registrationStepsItem = document.querySelectorAll('.registration-steps li'),
    registrationContentCol = document.querySelectorAll('.registration-content_col');
if (radioBlockLeft) {
    radioBlockLeft.addEventListener('click', () => {
        registrationLeft.style.display = '';
        popUpRegistrationContent.style.display = '';
        registrationRight.classList.remove('pop-up-registration_active');
        registrationLeft.classList.add('pop-up-registration_active');
        btnNext.classList.remove('btn-next_active');
        btnNext.previousSibling.previousSibling.style.display = 'inline-block';
        agreeBlock.style.opacity = '1';
        agreeBlock.classList.add('active');
        registrationField.classList.add('active');
        registrationRight.classList.remove('active');
        registrationSteps.classList.remove('active');
        radioBlockLeft.classList.add('active');
        radioBlockRight.classList.remove('active');
    });
    radioBlockRight.addEventListener('click', () => {
        registrationRight.style.display = '';
        popUpRegistrationContent.style.display = '';
        registrationRight.classList.add('pop-up-registration_active');
        registrationLeft.classList.remove('pop-up-registration_active');
        btnNext.classList.add('btn-next_active');
        btnNext.previousSibling.previousSibling.style.display = 'none';
        agreeBlock.style.opacity = '0';
        agreeBlock.classList.remove('active');
        registrationField.classList.remove('active');
        registrationRight.classList.add('active');
        registrationSteps.classList.add('active');
        radioBlockLeft.classList.remove('active');
        radioBlockRight.classList.add('active');
    });
    btnNext.addEventListener('click', () => {
        popUpRegistration.classList.add('pop-up-registration_company');
        registrationRight.classList.remove('pop-up-registration_active');
        popUpRegistrationHeader.style.display = 'flex';
        popUpRegistrationContent.style.display = 'flex';
        registrationRight.classList.remove('active');
        registrationLeft.classList.remove('active');
        registrationRight.style.display = 'none';
        registrationLeft.style.display = 'none';
        agreeBlock.style.opacity = '1';
        registrationCheck.classList.add('company');
        btnCloseCompany.classList.add('company');
        if ($(window).width() > 1050) {
            radioBlockLeft.style.display = 'none';
            btnNext.classList.remove('btn-next_active');
            btnNext.previousSibling.previousSibling.style.display = 'inline-block';
        } else {
            let indexVal = 0;
            registrationContentCol.forEach((el, ind) => {
                if (el.classList[1] === 'active') {
                    indexVal = ind + 1;
                }
            });
            if(registrationContentCol.length >= indexVal + 1) {
                registrationContentCol.forEach((elem) => {
                    elem.classList.remove('active');
                });
                registrationContentCol[indexVal].classList.add('active');
                registrationStepsItem[indexVal + 1].classList.add('active');
                if (registrationContentCol.length === indexVal + 1) {
                    btnNext.classList.remove('btn-next_active');
                    btnNext.previousSibling.previousSibling.style.display = 'inline-block';
                    agreeBlock.classList.add('active');
                } else {
                    btnNext.classList.add('btn-next_active');
                    btnNext.previousSibling.previousSibling.style.display = 'none';
                    agreeBlock.classList.remove('active');
                }
            }
        }
    });
    registrationStepsItem.forEach((el, ind) => {
        el.addEventListener('click', () => {
            if (el.classList[0] === 'active') {
                registrationContentCol.forEach((elem) => {
                    elem.classList.remove('active');
                });
                for (let index = ind; index < registrationStepsItem.length; index++) {
                    if(index !== 0) {
                        registrationStepsItem[index].classList.remove('active');
                    }
                }
                if (ind === 0) {
                    registrationRight.classList.add('pop-up-registration_active');
                    popUpRegistration.classList.remove('pop-up-registration_company');
                    registrationRight.classList.add('active');
                    popUpRegistrationHeader.style.display = 'none';
                    popUpRegistrationContent.style.display = 'none';
                    registrationRight.style.display = '';
                    registrationLeft.style.display = '';
                } else {
                    popUpRegistration.classList.add('pop-up-registration_company');
                    registrationRight.classList.remove('active');
                    registrationLeft.classList.remove('active');
                    popUpRegistrationContent.style.display = 'flex';
                    el.classList.add('active');
                    registrationContentCol[ind - 1].classList.add('active');
                }
            }
            if (registrationContentCol.length === ind && registrationContentCol[3].classList[1] === 'active') {
                btnNext.classList.remove('btn-next_active');
                btnNext.previousSibling.previousSibling.style.display = 'inline-block';
                agreeBlock.classList.add('active');
                agreeBlock.style.opacity = '1';
            } else {
                btnNext.classList.add('btn-next_active');
                btnNext.previousSibling.previousSibling.style.display = 'none';
                agreeBlock.classList.remove('active');
            }
        });
    });
}
const addCompany = document.getElementById('add-company');
const hideSlider = document.querySelectorAll('.companies-logo__slider_left .logo-slider__item');
const logoForm = document.querySelector('.logo-form');
const pageBody = document.querySelector('body');
if (addCompany) {
    addCompany.addEventListener('click', () => {
        hideSlider.forEach(el => {
            el.style.display = 'none';
        });
        logoForm.style.display = 'block';
        pageBody.style.overflow = 'auto';
    });
}

const deleteAccountBtn = document.querySelector('.pop-up-delete-account__btn');
const deletePassword = document.getElementById('delete-password');
const deletePasswordConfirm = document.getElementById('delete-password-confirm');
const popUpSettings = document.querySelector('.pop-up-settings');

if(deletePasswordConfirm) {
deletePasswordConfirm.addEventListener('keyup', () => {
    setTimeout(() => {
        if (deletePassword.value === deletePasswordConfirm.value) {
            if(deletePassword.value !== '' && deletePasswordConfirm.value !== '') {
                deleteAccountBtn.classList.add('successfully');
            }
        } else {
            deleteAccountBtn.classList.remove('successfully');
        }
    }, 100);
});

deletePassword.addEventListener('keyup', () => {
    setTimeout(() => {
        if (deletePassword.value === deletePasswordConfirm.value) {
            if(deletePassword.value !== '' && deletePasswordConfirm.value !== '') {
                deleteAccountBtn.classList.add('successfully');
            }
        } else {
            deleteAccountBtn.classList.remove('successfully');
        }
    }, 100);
});
deleteAccountBtn.addEventListener('click', () => {
    popUpSettings.classList.remove('pop-up_open');
});
}

document.querySelectorAll('.simplebar-child').forEach(el => {
    new SimpleBar(el);
});

function owlInitialize() {
    if ($(window).width() < 1700) {
        let arrowImage;
        if ($(window).width() > 767) {
            arrowImage = ['<img src="assets/img/sidebar-arrow.svg" alt="" class="">', '<img src="assets/img/sidebar-arrow.svg" alt="" class="">'];
        } else {
            arrowImage = ['<img src="assets/img/sidebar-arrow-mob.svg" alt="" class="">', '<img src="assets/img/sidebar-arrow-mob.svg" alt="" class="">'];
        }
        $('.account-orders__wrap-content').addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop:false,
            dots: false,
            nav: true,
            navText: arrowImage,
            responsive:{
                900:{
                    items:3
                },
                600:{
                    items:2
                },
                320:{
                    items:1
                }
            }
        });
    }else{
        $('.owl-carousel').owlCarousel('destroy');
        $('.account-orders__wrap-content').removeClass("owl-carousel");
    }
}
$(document).ready(function(e) {
    owlInitialize();
});
$(window).resize(function() {
    owlInitialize();
});
