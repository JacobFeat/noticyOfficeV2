const changeBtnAll = document.querySelector(".change-bg-btn");
const changeFirBtn = document.querySelector(".change-first");
const changeSecBtn = document.querySelector(".change-second");
const changeThiBtn = document.querySelector(".change-third");
const firstBgImg = document.querySelector(".first-img");
const secondBgImg = document.querySelector(".second-img");
const thirdBgImg = document.querySelector(".third-img");


changeFirBtn.addEventListener("click", turnFirstOn);

changeSecBtn.addEventListener("click", turnSecondOn);

changeThiBtn.addEventListener("click", turnThirdOn);

setInterval(()=>{
    setTimeout(turnSecondOn, 7000);
    setTimeout(turnThirdOn, 14000);
    turnFirstOn();
}, 21000);

function turnFirstOn(){
    firstBgImg.style.opacity="1";
    secondBgImg.style.opacity="0";
    thirdBgImg.style.opacity="0";
}

function turnSecondOn(){
    firstBgImg.style.opacity="0";
    secondBgImg.style.opacity="1";
    thirdBgImg.style.opacity="0";
}

function turnThirdOn(){
    firstBgImg.style.opacity="0";
    secondBgImg.style.opacity="0";
    thirdBgImg.style.opacity="1";
}