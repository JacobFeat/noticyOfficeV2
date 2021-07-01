const changeBtnAll = document.querySelectorAll(".change-bg-btn")
    ;

const changeFirBtn = document.querySelector(".change-first");
const changeSecBtn = document.querySelector(".change-second");
const changeThiBtn = document.querySelector(".change-third");
const firstBgImg = document.querySelector(".first-img");
const secondBgImg = document.querySelector(".second-img");
const thirdBgImg = document.querySelector(".third-img");

const contentAll = document.querySelectorAll(".content-left, .content-img");

const notarialTitle = document.querySelector('.notarial-action');
const notarialText = document.querySelector('.notarial-action-text');
const notarialList = document.querySelectorAll('.notarial-action-list li');
const halfContentAll = document.querySelectorAll('.half-content, .half-img');

const halfImgAll = document.querySelectorAll('.half-img');

const headerListItemAll = document.querySelectorAll('.header-list-item');

halfImgAll[1].style.width = window.getComputedStyle(halfImgAll[0]).width;

headerListItemAll.forEach(item => {
    // const itemAnimation = item.animate([
    //     { right: '-360px', },
    //     { right: '-40px' }
    // ], {
    //     easing: 'cubic-bezier(0.82, -0.1, 0.78, 0.5)',
    //     duration: 1000,
    //     fill: 'forwards',
    //     delay: 2000,
    // });

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
    // document.addEventListener('scroll', ()=>  itemAnimation.pause() );
});

function hideContactBar(item) {
    item.classList.remove(item.classList[2]);
}

document.addEventListener('scroll', () => {

});

document.addEventListener("scroll", debounce(scrollAnimAll, 10));

function scrollAnimAll(e) {
    contentAll.forEach(content => {
        scrollAnim(content, 2, 'content-active');
    });

    scrollAnim(notarialTitle, 0.5, 'notarial-active');
    scrollAnim(notarialText, 0.5, 'notarial-active');

    notarialList.forEach(item => {
        scrollAnim(item, 1, 'notarial-active');
    });

    halfContentAll.forEach(halfContent => {
        scrollAnim(halfContent, 3, 'half-active');
    })
}

function scrollAnim(item, rate = 2, addedClass) {
    const slideInAt = (window.scrollY + window.innerHeight) - item.clientHeight / rate;
    const isHalf = slideInAt > item.offsetTop;
    if (isHalf) {
        item.classList.add(addedClass);
    }
}

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