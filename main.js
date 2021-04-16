let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");
let imgslider = document.querySelector(".imgs_container")
let imgs = document.querySelectorAll(".img");

let slideIndex = 0;
let counter = "";
let curimg = "";
let num = (imgs.length - 1) / 2;

function detcurimg() {
    imgs.forEach(i => i.classList.remove("center_img"));
    counter = (-slideIndex + num);
    curimg = imgs[counter];
    curimg.classList.add("center_img");
}

function slideAdd(n) {
    slideIndex += n;
    navig(slideIndex);
    detcurimg();


}

function navig(n) {
    if (slideIndex <= -num) {
        slideIndex = -num;

    } else if (slideIndex >= num) {
        slideIndex = num;
    }
    else {
        imgslider.style.transform = "translateX(" + ((parseInt(imgslider.clientWidth) / imgs.length) * n) + "px)";

    }
};

imgs.forEach(i => i.addEventListener("click", select))

function select() {
    slideIndex = parseInt(-(this.attributes["data-num"].value));
    imgslider.style.transform = "translateX(" + ((parseInt(imgslider.clientWidth) / imgs.length) * slideIndex) + "px)";

    detcurimg();

    if (counter == 6) {
        imgslider.style.transform = "translateX(" + ((parseInt(imgslider.clientWidth) / imgs.length) * (slideIndex + 1)) + "px)";
    } else if (counter == 0) {
        imgslider.style.transform = "translateX(" + ((parseInt(imgslider.clientWidth) / imgs.length) * (slideIndex - 1)) + "px)";

    }

}