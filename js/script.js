'use strict'
let hederMenu = document.querySelector('.header-nav');
let burgerElement = document.querySelector('.header-burger');
let bodyScrollLook = document.querySelector('body');
let menuNavigationList = document.querySelectorAll('.nav-list__item');

function burgerMenu() {
    burgerElement.addEventListener('click', () => burgerElement.classList.toggle('active'));
    burgerElement.addEventListener('click', () => hederMenu.classList.toggle('active'));
    burgerElement.addEventListener('click', () => bodyScrollLook.classList.toggle('scroll-look'));
}
burgerMenu();

function menuPaddingOnScroll() {
    window.addEventListener('scroll', scrollFromTop);
    function scrollFromTop() {
        let scrollLenth = window.pageYOffset;
        let header = document.querySelector('.header');
        if (scrollLenth >= 100) {
            header.style.cssText = `
                padding: 10px 0;
                transition: all 0.2s ease 0s;
                background-color: rgba(0, 0, 0, .6);
            `;
        } else {
            header.style.cssText = `
                padding: 20px 0;
                transition: all 0.2s ease 0s;
                background-color: rgba(0, 0, 0, 1);

            `;
        }
    }
}
menuPaddingOnScroll();
function showMore() {
    let buttonReadMore = document.querySelectorAll('.row-item__btn');
    let readMoreBlock = document.querySelectorAll('.reade-more');
    buttonReadMore.forEach((element, index1) => {
        element.addEventListener('click', readMore);
        let button = element;
        function readMore() {
            element.classList.toggle('active');
            if (element.innerHTML == 'Read less') {
                element.textContent = 'Read more';
            } else {
                element.textContent = 'Read less';
            }
            readMoreBlock.forEach((element, index2) => {
                if (index1 == index2) {
                    if (button.classList.contains('active')) {
                        element.classList.add('unhide');
                    } else {
                        element.classList.remove('unhide');
                    }
                }
            });
        }
    });
}
showMore()

let ibg = document.querySelectorAll('.ibg');
ibg.forEach((element, index) => {
    let a = `../${element.querySelector('img').getAttribute('src')}`;
    element.style.backgroundImage = `url('${a}')`;
});
