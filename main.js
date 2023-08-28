const buttons= document.querySelectorAll(".buttons")
const count= document.getElementById("count")

let counter=0;
// QUERYSELECTORALL te muestra los botones como array. Por eso se hace luego un forEach.

console.log(buttons);


buttons.forEach((button) =>{
    button.addEventListener("click", function(e){
        // current target para traer algo del momento
        const style= e.currentTarget.classList;
        if(style.contains("decrease")){
            counter --
            
        }else if(style.contains("increase")){
            counter ++
        }else{
            counter = 0
        }
        count.textContent= counter

        if(counter < 0){
            count.style.color= "red"
        }else if(counter >=1){
            count.style.color= "green"
        }else{
            count.style.color= "black"
        }
    })
    
});

