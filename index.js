const changeBtnAll = document.querySelector(".change-bg-btn");
const changeFirBtn = document.querySelector(".change-first");
const changeSecBtn = document.querySelector(".change-second");
const changeThiBtn = document.querySelector(".change-third");
const firstBgImg = document.querySelector(".first-img");
const secondBgImg = document.querySelector(".second-img");
const thirdBgImg = document.querySelector(".third-img");


changeFirBtn.addEventListener("click", ()=>{
    firstBgImg.style.opacity="1";
    secondBgImg.style.opacity="0";
    thirdBgImg.style.opacity="0";
});

changeSecBtn.addEventListener("click", ()=>{
    firstBgImg.style.opacity="0";
    secondBgImg.style.opacity="1";
    thirdBgImg.style.opacity="0";
});

changeThiBtn.addEventListener("click", ()=>{
    firstBgImg.style.opacity="0";
    secondBgImg.style.opacity="0";
    thirdBgImg.style.opacity="1";
});