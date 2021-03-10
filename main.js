const textArrayData = ["A Front-End Web Developer."]

const typedText = document.querySelector("#typedtext");

let startDelay = 1000;
let typingDelay = 90;
let charactorIndex = 0;
let textArrayIndex = 0;





setTimeout(function typing (){
         

       

                if(charactorIndex < textArrayData[textArrayIndex].length){
        
                typedText.textContent += textArrayData[textArrayIndex].charAt(charactorIndex);
                charactorIndex++;
                
                        setTimeout(typing,typingDelay);
                }
        
        
},startDelay);



