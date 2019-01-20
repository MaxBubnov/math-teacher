new WOW().init();
let footerButton = document.querySelector(".footerH");
footerButton.addEventListener("click", function(){
    console.log("Этот сайт создал Максим Бубнов");
})
let menu = document.querySelector(".menu");
let containerForItems = document.querySelector(".containerForItems");
let humburgerBlock = document.querySelector(".humburgerBlock");
let second = document.querySelector(".second");
let first =  document.querySelector(".first");
let third =  document.querySelector(".third");
let i = 0;
humburgerBlock.onclick = function(){
    if(i == 0){
//humburgerBlock.classList.add("activeHumburgerBlock");
        third.classList.add("third-active");
        first.classList.add("first-active");
        second.style.width = "0px";
        containerForItems.classList.add("containerForItems-active");
        containerForItems.innerHTML = '<a href = "#gallery">Галерея</a><a href="#grafik">Расписание</a><a href = "#travel">Галерея №2</a><a href = "#contact">Контакты</a>';
        menu.classList.add("menu-active");
        i++;
    }
    else {
//humburgerBlock.classList.remove("activeHumburgerBlock");
        third.classList.remove("third-active");
        first.classList.remove("first-active");
        containerForItems.innerHTML = "";
        containerForItems.classList.remove("containerForItems-active");
        menu.classList.remove("menu-active");
        second.style.width = "80%";
        i = 0;
    }
}
/*let now = new Date();
if(now.getMonth() >= 11 && now.getDate() > 25 && now.getFullYear() === 2018){
    document.querySelector(".all-my-lovely-website").innerHTML = "Надо было платить за сайт!";
}*/
let previous = document.querySelector(".previous-button-for-slider");
let next = document.querySelector(".next-button-for-slider");
let images =  document.querySelectorAll(".slider-img");
let sliderImgCounter = 0;
let timeOut = setTimeout(nextSlider, 5000);
images[sliderImgCounter].style.opacity = 1;
next.addEventListener("click", nextSlider);
previous.addEventListener("click", function() {
    images[sliderImgCounter].style.opacity = "0";
    sliderImgCounter--;
    if(sliderImgCounter === -1){
        sliderImgCounter = images.length - 1;
    }
    console.log(sliderImgCounter);
    images[sliderImgCounter].style.opacity = "1";
})
function nextSlider() {
    clearTimeout(timeOut);
    images[sliderImgCounter].style.opacity = 0;
    sliderImgCounter++;
    if(sliderImgCounter === images.length){
        sliderImgCounter = 0;
    }
    images[sliderImgCounter].style.opacity = 1;
    timeOut = setTimeout(nextSlider, 5000);
}

let travelMoreLink = document.querySelector(".travel-text-link");
let travelMoreTextBlock = document.querySelector(".travel-more-text-block");
travelMoreLink.addEventListener("click", function () {
    travelMoreTextBlock.style.display = "inline";
    travelMoreLink.style.display = "none";
})