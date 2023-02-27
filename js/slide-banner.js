// las constantes no cambian
const slider = document.querySelector("#bannerSlides");

// variables que pueden cambiar
let sliderContent = document.querySelectorAll(".banner__slides--slide");
let sliderContentLast = sliderContent[sliderContent.length -1];

// const buttons
const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");


// METODO
slider.insertAdjacentElement('afterbegin', sliderContentLast);

// FUNCTIONS
 // Right
 function Next(){
    let sliderContentFirst = document.querySelectorAll(".banner__slides--slide")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderContentFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

    // Left
function Prev(){
    // se declara variable
    let sliderContent = document.querySelectorAll(".banner__slides--slide");
    let sliderContentLast = sliderContent[sliderContent.length -1];

    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        // metodo para cambiar la posicion
        slider.insertAdjacentElement('afterbegin', sliderContentLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
   


// btnLeft
btnLeft.addEventListener('click', function(){
    Prev();
});
// 
btnRight.addEventListener('click', function(){
    Next();
});

// automatic
setInterval(function(){
    Next();
}, 4000);