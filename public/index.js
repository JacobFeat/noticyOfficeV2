const headerBgAll = document.querySelectorAll('.header-bg');

const contentAll = document.querySelectorAll(".content-left, .content-img");

const mainPage = document.querySelector('#main-page');
const aboutMeBox = document.querySelector('#about-me-box');
const notarialBox = document.querySelector('#notarial-action-box');
const textMeBox = document.querySelector('.form-title');
const contactBox = document.querySelector('#contact-info-container');


const navArr = [mainPage, aboutMeBox, notarialBox, contactBox];

const notarialTitle = document.querySelector('.notarial-action');
const notarialText = document.querySelector('.notarial-action-text');
const notarialList = document.querySelectorAll('.notarial-action-list li');
const halfContentAll = document.querySelectorAll('.half-content, .half-img');

const halfImgAll = document.querySelectorAll('.half-img');

const headerListItemAll = document.querySelectorAll('.header-list-item');

const menuLine = document.querySelector('.menu-line');
const navList = document.querySelector('.nav-list');
const navItemAll = document.querySelectorAll('.nav-list li');
const navItemLinks = document.querySelectorAll('.nav-list-item');

const contactContent = document.querySelector('.contact-content');
const contactMap = document.querySelector('.map-box');

const hamburger = document.querySelector('.hamburger');
const hamburgerSpans = document.querySelectorAll('.hamburger span')
const firstHam = document.querySelector('.first-ham');
const secondHam = document.querySelector('.second-ham');
const thirdHam = document.querySelector('.third-ham');

const inputName = document.querySelector('.name-input');
const inputMail = document.querySelector('.mail-input');
const inputTextarea = document.querySelector('.text-input');
const inputsAll = document.querySelectorAll('.form-input');
const submitBtn = document.querySelector('.submit-input');
const invalidTextName = document.querySelector('.form-name .invalid-text');
const invalidTextMail = document.querySelector('.form-mail .invalid-text');
const invalidTextTextArea = document.querySelector('.form-text .invalid-text');
const formContainer = document.querySelector('.form-container');

if ( !( 'scrollBehavior' in document.documentElement.style ) ) {
    import( 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.js' ).then( () => {
        document.querySelector( 'nav' ).addEventListener( 'click', ( evt ) => {
            const link = evt.target.closest( '.nav-list-item' );

            if ( !link ) {
                return;
            }

            evt.preventDefault();

            const scrollToElement = link.getAttribute( 'href' );

            document.querySelector( scrollToElement ).scrollIntoView( {
                behavior: 'smooth' }
            );

            location.href = scrollToElement;
        } );
    } );
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('load', () => {
    menuLine.style.width = window.getComputedStyle(navItemAll[0]).width;
    menuLine.style.left = navItemAll[0].offsetLeft + "px";
    halfImgAll[1].style.width = window.getComputedStyle(halfImgAll[0]).width;
});

window.addEventListener('resize', () => {
    halfImgAll[1].style.width = window.getComputedStyle(halfImgAll[0]).width;
    let vhSec = window.innerHeight * 0.01;
    if (vh - vhSec > 1.6 || vh - vhSec < -1.6 || vh - vhSec == 0) {
        document.documentElement.style.setProperty('--vh', `${vhSec}px`);
    }
});


headerListItemAll.forEach(item => {

    item.addEventListener('mouseover', (e) => {

        if (getComputedStyle(item).right === "-360px") {
            if (e.target.closest('.item-first')) {
                item.classList.add('header-list-item-first-active');
            }
            else if (e.target.closest('.item-second')) {
                item.classList.add('header-list-item-second-active');
            }

            else if (e.target.closest('.item-third')) {
                item.classList.add('header-list-item-third-active');
            }
        }
    });
    item.addEventListener('mouseleave', () => {
        hideContactBar(item);
    });
});

const rodoExpanded = document.querySelector('.rodo-expanded');
function showRodo(){
    rodoExpanded.classList.add('rodo-expanded-active');
}

const rodoClose = document.querySelector('.rodo-close');
function hideRodo(){
    rodoExpanded.classList.remove('rodo-expanded-active');
}

const rodoTextUnderline = document.querySelector('.rodo-text-underline');
rodoTextUnderline.addEventListener('click', showRodo);
rodoClose.addEventListener('click', hideRodo);

function hideContactBar(item) {
    item.classList.remove(item.classList[2]);
}

navItemAll.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 1051) {
            firstHam.classList.remove('ham-vis-active');
            secondHam.classList.remove('ham-hid-active');
            thirdHam.classList.remove('ham-vis-active-minus');
            navList.classList.remove('hamburger-active');
            layout.classList.remove('layout-active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

const layout = document.querySelector('.layout');

hamburger.addEventListener('click', () => {
    firstHam.classList.toggle('ham-vis-active');
    secondHam.classList.toggle('ham-hid-active');
    thirdHam.classList.toggle('ham-vis-active-minus');
    navList.classList.toggle('hamburger-active');
    layout.classList.toggle('layout-active');
    setAriaExpanded(hamburger);

})

document.addEventListener('scroll', () => {
    scrollAnimAll();
    finishHeaderContactAnim();
    changeNavColor();
})

function setAriaExpanded(btn) {
    const isOpened = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpened));
}

function scrollAnimAll(e) {
    contentAll.forEach(content => {
        scrollAnim(content, 5, 'content-active');
    });

    scrollAnim(notarialTitle, 0.5, 'notarial-active');
    scrollAnim(notarialText, 1, 'notarial-active');

    notarialList.forEach(item => {
        scrollAnim(item, 3, 'notarial-active');
    });

    halfContentAll.forEach(halfContent => {
        scrollAnim(halfContent, 5, 'half-active');
    })

    scrollAnim(contactContent, 5, 'content-active');
    scrollAnim(contactMap, 5, 'content-active');

    scrollIndicator(e);

}

function menuChanger(posOfElement) {
    menuLine.style.width = window.getComputedStyle(navItemAll[posOfElement]).width;
    menuLine.style.left = navItemAll[posOfElement].offsetLeft + "px";
}

function scrollIndicator(e) {
    const currentScrollBottom = window.scrollY;
    if (currentScrollBottom > mainPage.offsetTop) {
        menuChanger(0);
    }
    if (currentScrollBottom > aboutMeBox.offsetTop - 350) {
        menuChanger(1);
    }

    if (currentScrollBottom > notarialBox.offsetTop - 200) {
        menuChanger(2);
    }

    if (currentScrollBottom > textMeBox.offsetTop - 350) {
        menuChanger(3);
    }
}

function scrollAnim(item, rate = 2, addedClass) {
    const slideInAt = (window.scrollY + window.innerHeight) - item.clientHeight / rate;
    const isHalf = slideInAt > item.offsetTop;
    if (isHalf) {
        item.classList.add(addedClass);
    }
}

function finishHeaderContactAnim() {
    headerListItemAll.forEach(item => {
        if (getComputedStyle(item).right === "-40px") {
            item.style.animation = "stop_header_contact_hide forwards 0.5s cubic-bezier(0.82, -0.1, 0.78, 0.5)";
        }
    });
}


const nav = document.querySelector('nav');

function changeNavColor(){
    if(scrollY+nav.clientHeight > mainPage.clientHeight){
        nav.classList.add('nav-background');
        navItemLinks.forEach(link => link.classList.add('nav-list-item-background'));
        document.querySelector('.logo').src = "images/wd_logo.svg";
        hamburgerSpans.forEach(span => span.classList.add('span-background'));
    }
    else{
        nav.classList.remove('nav-background');
        navItemLinks.forEach(link => link.classList.remove('nav-list-item-background'));
        document.querySelector('.logo').src = "images/wd_logo_white_RGB.svg";
        hamburgerSpans.forEach(span => span.classList.remove('span-background'));
    }
}


//wesbros
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function onSubmit(token) {
    if (formContainer.checkValidity()) {
        formContainer.submit();
    } else {
      grecaptcha.reset();
      formContainer.reportValidity();
    }
  }