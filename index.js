const changeBtnAll = document.querySelectorAll(".change-bg-btn")
;

const changeFirBtn = document.querySelector(".change-first");
const changeSecBtn = document.querySelector(".change-second");
const changeThiBtn = document.querySelector(".change-third");
const firstBgImg = document.querySelector(".first-img");
const secondBgImg = document.querySelector(".second-img");
const thirdBgImg = document.querySelector(".third-img");

const contentAll = document.querySelectorAll(".content-left, .content-img");

document.addEventListener("scroll", debounce(scrollAnim));

function scrollAnim(e){
    contentAll.forEach(content => {
        const slideInAt = (window.scrollY + window.innerHeight) - content.clientHeight/2.5;
        const isHalf = slideInAt > content.offsetTop;
        console.log(content.clientHeight);
        if(isHalf){
            console.log("siu");
            content.classList.add('content-active');
        }
    });

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