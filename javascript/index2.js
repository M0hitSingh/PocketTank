var count = 0;

function start() {
    var angle = document.getElementById("angle");
    var power = document.getElementById("power");


    window.addEventListener("keydown",function(event){
        if(event.key==="q"||event.key==="Q"){
            if(parseInt(angle.innerHTML)>1){
                angle.innerHTML=parseInt(angle.innerHTML)-1;

            }
         }
        }
    )
    window.addEventListener("keydown",function(event){
        if(event.key==="e"||event.key==="E"){
            if(parseInt(angle.innerHTML)<89){
                angle.innerHTML=parseInt(angle.innerHTML)+ 1;       
            }
         }
        }
    )

window.addEventListener("keydown",function(event){
    if(event.key==="a"||event.key==="A"){
        if(parseInt(power.innerHTML)>1){
            power.innerHTML=parseInt(power.innerHTML)-1;   
        }
     }
    }
)
window.addEventListener("keydown",function(event){
    if(event.key==="d"||event.key==="D"){
        if(parseInt(power.innerHTML)<99){
            power.innerHTML=parseInt(power.innerHTML)+1;
        }
             }
    }
)

//we have to disable enter button
    window.addEventListener("keydown",function(event){
        if(event.key==="Enter"){
            if(count ==0){
            count++;
            fire(parseInt(power.innerHTML),parseInt(angle.innerHTML),1);
            }
    
        }
    }
    )
}



