const textArrayData = ["A Front-End Web Developer."]

const typedText = document.querySelector("#typedtext");
const burgerButton = document.querySelector(".burger-menu");




let startDelay = 1000;
let typingDelay = 90;
let charactorIndex = 0;
let textArrayIndex = 0;



burgerButton.addEventListener('click', function () {
        
        let menu = document.querySelector(".menu-list");
        
        menu.classList.toggle("menu-show");
       

});

window.addEventListener('click', function(event){
        
        let menu = document.querySelector(".menu-show");
       let burger = document.querySelector(".burger-menu");
       

        if(event.target != menu && event.target != burger && event.target.parentNode != menu ){
               
                menu.classList.remove("menu-show");
        
        } 
});






setTimeout(function typing (){
         

       

                if(charactorIndex < textArrayData[textArrayIndex].length){
        
                typedText.textContent += textArrayData[textArrayIndex].charAt(charactorIndex);
                charactorIndex++;
                
                        setTimeout(typing,typingDelay);
                }
        
        
},startDelay);



