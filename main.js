
        /* ARRAY */
const textArrayData = ["A Front-End Web Developer."]

        /* SELECTORS */
const typedText = document.querySelector("#typedtext");
const burgerButton = document.querySelector(".burger-box");
const burgerLine = document.querySelector(".burger-line");
const burgerCross = document.querySelector(".burger-cross");
const menu = document.querySelector("#menu-list");

let startDelay = 1000;
let typingDelay = 90;
let charactorIndex = 0;
let textArrayIndex = 0;

        /* BURGER MENU FUNCTION */

burgerLine.addEventListener('click', function () {
               
        menu.classList.toggle("burger-list-show");        
        
        burgerLine.classList.toggle("burger-cross");

});

window.addEventListener('click', function(event){
        
 if(event.target != menu && event.target != burgerLine && event.target != burgerButton && event.target.parentNode != menu ){
               
        menu.classList.remove("burger-list-show");

        burgerLine.classList.replace("burger-cross","burger-line");

 } 

});

        /*  TYPING EFFECT  */

setTimeout(function typing (){
         
        if(charactorIndex < textArrayData[textArrayIndex].length){
        
                typedText.textContent += textArrayData[textArrayIndex].charAt(charactorIndex);
                charactorIndex++;
                
                setTimeout(typing,typingDelay);
        }
          
},startDelay);



