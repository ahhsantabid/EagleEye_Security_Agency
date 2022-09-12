const text =document.querySelector('leftBox');
const image =document.querySelector('rightBox');

window.addEventListener("scroll",appearOnScroll);

function appearOnScroll(){
let textPosition = text.getBoundingClientRect().top;
let windowHeight = window.innerHeight/1.5;
if(windowHeight>textPosition){
    text.classList.remove("push-left");
    image.classList.remove("push-right");
}
else{
    text.classList.add("push-left");
    image.classList.add("push-right");
}

}