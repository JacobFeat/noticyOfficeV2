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
const halfContentAll = document.querySelectorAll('.half-content');

document.addEventListener("scroll", debounce(scrollAnimAll, 10));

function scrollAnimAll(e){
    contentAll.forEach(content => {
        scrollAnim(content, 2, 'content-active');
    });

    scrollAnim(notarialTitle, 1, 'notarial-active');
    scrollAnim(notarialText, 1, 'notarial-active');

    notarialList.forEach(item => {
        scrollAnim(item, 1, 'notarial-active');
    });

    halfContentAll.forEach(halfContent => {
        scrollAnim(halfContent, 3, 'half-active');
    })
        
}

function scrollAnim(item, rate = 2, addedClass){
    const slideInAt = (window.scrollY + window.innerHeight) - item.clientHeight / rate;
    const isHalf = slideInAt > item.offsetTop;
    if(isHalf){
        item.classList.add(addedClass);
    }
}

changeFirBtn.addEventListener("click", turnFirstOn);
changeSecBtn.addEventListener("click", turnSecondOn);
changeThiBtn.addEventListener("click", turnThirdOn);

setTimeout(turnSecondOn, 7000);
setTimeout(turnThirdOn, 14000);
setInterval(()=>{
    setTimeout(turnSecondOn, 7000);
    setTimeout(turnThirdOn, 14000);
    turnFirstOn();
}, 21000);

function turnFirstOn(){
    firstBgImg.style.opacity="1";
    secondBgImg.style.opacity="0";
    thirdBgImg.style.opacity="0";
    changeFirBtn.style.background="#C8C8C8";
    changeSecBtn.style.background="#EAEAEA";
    changeThiBtn.style.background="#EAEAEA";
}

function turnSecondOn(){
    firstBgImg.style.opacity="0";
    secondBgImg.style.opacity="1";
    thirdBgImg.style.opacity="0";
    changeFirBtn.style.background="#EAEAEA";
    changeSecBtn.style.background="#C8C8C8";
    changeThiBtn.style.background="#EAEAEA";
}

function turnThirdOn(){
    firstBgImg.style.opacity="0";
    secondBgImg.style.opacity="0";
    thirdBgImg.style.opacity="1";
    changeFirBtn.style.background="#EAEAEA";
    changeSecBtn.style.background="#EAEAEA";
    changeThiBtn.style.background="#C8C8C8";
}

//wesbros
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }