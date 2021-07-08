const changeBtnAll = document.querySelectorAll(".change-bg-btn");

const headerBgAll = document.querySelectorAll('.header-bg');

const changeFirBtn = document.querySelector(".change-first");
const changeSecBtn = document.querySelector(".change-second");
const changeThiBtn = document.querySelector(".change-third");
const firstBgImg = document.querySelector(".first-img");
const secondBgImg = document.querySelector(".second-img");
const thirdBgImg = document.querySelector(".third-img");

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

const contactContent = document.querySelector('.contact-content');
const contactMap = document.querySelector('.map-box');

const hamburger = document.querySelector('.hamburger');
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

formContainer.addEventListener('submit', (e) => {
    const nameRegex = /[^A-Za-z]/g;
    console.log(inputName.value.match(nameRegex));

    inputsAll.forEach(input => {
        if (input.value.length <= 0) {
            e.preventDefault();
            input.classList.add('invalid-form');
            input.parentElement.querySelector('.invalid-text').textContent = 'Nie można wysłać pustej wiadomości';
            input.parentElement.querySelector('.invalid-text').style.visibility = 'visible';
        }
        else {
            input.classList.remove('invalid-form');
            input.parentElement.querySelector('.invalid-text').style.visibility = 'hidden';
        }
    })

    if(inputName.value.length > 0 && inputName.value.match(nameRegex) !== null){
        e.preventDefault();
        invalidTextName.textContent = 'Imię i nazwisko może zawierać tylko litery.';
        invalidTextName.style.visibility = 'visible';
        inputName.classList.add('invalid-form');
    }   
})

inputsAll.forEach(input => {
        input.addEventListener('keyup', () => {
            if(input.classList.contains('invalid-form')){
                console.log('hi');
                input.classList.remove('invalid-form');
                input.parentElement.querySelector('.invalid-text').style.visibility = 'hidden';
            }
        })
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('load', () => {
    menuLine.style.width = window.getComputedStyle(navItemAll[0]).width;
    menuLine.style.left = navItemAll[0].offsetLeft + "px";
    halfImgAll[1].style.width = window.getComputedStyle(halfImgAll[0]).width;

    //change bg img to mobile version
    if (window.innerWidth < 751) {
        headerBgAll.forEach(bg => {
            let link = bg.src;
            const linkStr = 'main-bg/';
            let linkStrIndex = link.indexOf(linkStr);
            let firstPart = link.substring(0, linkStrIndex + 8);
            const mobile = 'mobile/';
            let secondPart = link.substring(linkStrIndex + 8, link.length);
            let changedLink = firstPart + mobile + secondPart;
            bg.src = changedLink;
        });
    }
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

function hideContactBar(item) {
    item.classList.remove(item.classList[2]);
}


navItemAll[0].addEventListener('click', () => {
    window.scrollTo({
        top: mainPage.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});
navItemAll[1].addEventListener('click', () => {
    window.scrollTo({
        top: aboutMeBox.offsetTop - 200,
        left: 0,
        behavior: 'smooth'
    });
});
navItemAll[2].addEventListener('click', () => {
    window.scrollTo({
        top: notarialBox.offsetTop - 100,
        left: 0,
        behavior: 'smooth'
    });
});
navItemAll[3].addEventListener('click', () => {
    window.scrollTo({
        top: contactBox.offsetTop - 0,
        left: 0,
        behavior: 'smooth'
    });
});


navItemAll.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 1051) {
            firstHam.classList.remove('ham-vis-active');
            secondHam.classList.remove('ham-hid-active');
            thirdHam.classList.remove('ham-vis-active-minus');
            navList.classList.remove('hamburger-active');

            if (navList.classList[1] === "hamburger-active") {
                navItemAll.forEach(item => {
                    item.style.visibility = "visible";
                    item.style.pointerEvents = "auto";
                    item.style.touchAction = "auto";
                    item.style.display = "block";
                });
            }
            else {
                navItemAll.forEach(item => {
                    item.style.visibility = "hidden";
                    item.style.pointerEvents = "none";
                    item.style.touchAction = "none";
                    (setTimeout(() => {
                        item.style.display = "none";
                    }, 500));

                });
            }
        }
    });
});

hamburger.addEventListener('click', () => {
    firstHam.classList.toggle('ham-vis-active');
    secondHam.classList.toggle('ham-hid-active');
    thirdHam.classList.toggle('ham-vis-active-minus');
    navList.classList.toggle('hamburger-active');
    if (navList.classList[1] === "hamburger-active") {
        navItemAll.forEach(item => {
            item.style.visibility = "visible";
            item.style.pointerEvents = "auto";
            item.style.touchAction = "auto";
            item.style.display = "block";
        });
    }
    else {
        navItemAll.forEach(item => {
            item.style.visibility = "hidden";
            item.style.pointerEvents = "none";
            item.style.touchAction = "none";
            (setTimeout(() => {
                item.style.display = "none";
            }, 500));

        });
    }

})

document.addEventListener("scroll", debounce(scrollAnimAll, 5));

document.addEventListener('scroll', finishHeaderContactAnim);

changeFirBtn.addEventListener("click", turnFirstOn);
changeSecBtn.addEventListener("click", turnSecondOn);
changeThiBtn.addEventListener("click", turnThirdOn);

setTimeout(turnSecondOn, 7000);
setTimeout(turnThirdOn, 14000);
setInterval(() => {
    setTimeout(turnSecondOn, 7000);
    setTimeout(turnThirdOn, 14000);
    turnFirstOn();
}, 21000);

function scrollAnimAll(e) {
    contentAll.forEach(content => {
        scrollAnim(content, 2, 'content-active');
    });

    scrollAnim(notarialTitle, 0.5, 'notarial-active');
    scrollAnim(notarialText, 1, 'notarial-active');

    notarialList.forEach(item => {
        scrollAnim(item, 1, 'notarial-active');
    });

    halfContentAll.forEach(halfContent => {
        scrollAnim(halfContent, 3, 'half-active');
    })

    scrollAnim(contactContent, 2, 'content-active');
    scrollAnim(contactMap, 2, 'content-active');

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



function turnFirstOn() {
    firstBgImg.style.opacity = "1";
    secondBgImg.style.opacity = "0";
    thirdBgImg.style.opacity = "0";
    changeFirBtn.style.background = "#C8C8C8";
    changeSecBtn.style.background = "#EAEAEA";
    changeThiBtn.style.background = "#EAEAEA";
}

function turnSecondOn() {
    firstBgImg.style.opacity = "0";
    secondBgImg.style.opacity = "1";
    thirdBgImg.style.opacity = "0";
    changeFirBtn.style.background = "#EAEAEA";
    changeSecBtn.style.background = "#C8C8C8";
    changeThiBtn.style.background = "#EAEAEA";
}

function turnThirdOn() {
    firstBgImg.style.opacity = "0";
    secondBgImg.style.opacity = "0";
    thirdBgImg.style.opacity = "1";
    changeFirBtn.style.background = "#EAEAEA";
    changeSecBtn.style.background = "#EAEAEA";
    changeThiBtn.style.background = "#C8C8C8";
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