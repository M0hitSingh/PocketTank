var count = 0;
var turn = 1;


function start() {



    var angle = document.getElementById("angle");
    var power = document.getElementById("power");

    window.addEventListener("keydown",function(event){
        if(event.key==="ArrowRight"){
            if(turn==1 && (tank1.offsetLeft+300)<(this.window.innerWidth/2)){
                tank1.style.left = (tank1.offsetLeft+2)+"px";
            }
            else if(turn==-1 && (tank2.offsetLeft+150)<this.window.innerWidth){
                tank2.style.left = (tank2.offsetLeft+2)+"px";
            }

         }
        }
    )

    window.addEventListener("keydown",function(event){
        if(event.key==="ArrowLeft"){
            if(turn==1 && tank1.offsetLeft>0){
                tank1.style.left = (tank1.offsetLeft-2)+"px";
            }
            else if(turn==-1 && tank2.offsetLeft>(this.window.innerWidth/2+180)){
                tank2.style.left = (tank2.offsetLeft-2)+"px";
            }

         }
        }
    )

    window.addEventListener("keydown",function(event){
        if(event.key==="q"||event.key==="Q"){
            if(parseInt(angle.innerHTML)>10){
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
            fire(parseInt(power.innerHTML),parseInt(angle.innerHTML),turn);
            }
            if(count == -1){
                count--;
                fire(parseInt(power.innerHTML),parseInt(angle.innerHTML),turn);
            }
    
        }
    }
    )
}



