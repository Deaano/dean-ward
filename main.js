const textArrayData = ["A Front-End Web Developer."]

const typedText = document.querySelector("#typedtext");
const burgerButton = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu-list");
const menuLinks = document.querySelectorAll(".menu-links");

let startDelay = 1000;
let typingDelay = 90;
let charactorIndex = 0;
let textArrayIndex = 0;



burgerButton.addEventListener('click', function () {
        menu.classList.toggle('menu-show');

        
});



setTimeout(function typing (){
         

       

                if(charactorIndex < textArrayData[textArrayIndex].length){
        
                typedText.textContent += textArrayData[textArrayIndex].charAt(charactorIndex);
                charactorIndex++;
                
                        setTimeout(typing,typingDelay);
                }
        
        
},startDelay);



