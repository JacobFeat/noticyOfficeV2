const changeBtnAll = document.querySelectorAll(".change-bg-btn")
;

const changeFirBtn = document.querySelector(".change-first");
const changeSecBtn = document.querySelector(".change-second");
const changeThiBtn = document.querySelector(".change-third");
const firstBgImg = document.querySelector(".first-img");
const secondBgImg = document.querySelector(".second-img");
const thirdBgImg = document.querySelector(".third-img");


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