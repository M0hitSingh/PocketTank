var count = 0;
var turn = 1;
var turretturn = 0;
var end = 0;

function start() {



    var angle = document.getElementById("angle");
    var power = document.getElementById("power");

    window.addEventListener("keydown",function(event){
        if((event.key==="ArrowRight") && end == 0){
            if(turn==1 && (tank1.offsetLeft+300)<(this.window.innerWidth/2)){
                tank1.style.left = (tank1.offsetLeft+3)+"px";
            }
            else if(turn==-1 && (tank2.offsetLeft+150)<this.window.innerWidth){
                tank2.style.left = (tank2.offsetLeft+3)+"px";
            }

         }
        }
    )

    window.addEventListener("keydown",function(event){
        if(event.key==="ArrowLeft" && end == 0){
            if(turn==1 && tank1.offsetLeft>0){
                tank1.style.left = (tank1.offsetLeft-3)+"px";
            }
            else if(turn==-1 && tank2.offsetLeft>(this.window.innerWidth/2+180)){
                tank2.style.left = (tank2.offsetLeft-3)+"px";
            }

         }
        }
    )


    window.addEventListener("keydown",function(event){
        if((event.key==="q"||event.key==="Q") && end == 0){
            if(parseInt(angle.innerHTML)>10){
                angle.innerHTML=parseInt(angle.innerHTML)-1;
                if(turretturn==0){
                    var x = (45 - angle.innerHTML);
                    document.getElementsByTagName("img")[turretturn].style.transform="rotate("+ (x)+"deg)";
                }
                else{
                    var x = (45 + angle.innerHTML);
                    document.getElementsByTagName("img")[turretturn].style.transform="rotate("+ (x-10)+"deg)";
                    document.getElementsByTagName("img")[turretturn].style.margin="28px -1px 24px 31px"
                }
            }
         }
        }
    )
    window.addEventListener("keydown",function(event){
        if((event.key==="e"||event.key==="E") && end == 0){
            if(parseInt(angle.innerHTML)<89){
                angle.innerHTML=parseInt(angle.innerHTML)+ 1;     
                if(turretturn==0){
                    var x = ( 45-angle.innerHTML);
                    document.getElementsByTagName("img")[turretturn].style.transform="rotate(" + (x)+"deg)";
                }
                else{
                    var x = ( 45+angle.innerHTML);
                    document.getElementsByTagName("img")[turretturn].style.transform="rotate(" + (x)+"deg)";
                    document.getElementsByTagName("img")[turretturn].style.margin="28px -1px 24px 31px"
                }
            }
         }
        }
    )

window.addEventListener("keydown",function(event){
    if((event.key==="a"||event.key==="A") && end == 0){
        if(parseInt(power.innerHTML)>1){
            power.innerHTML=parseInt(power.innerHTML)-1;   
        }
    }
}
)
window.addEventListener("keydown",function(event){
    if((event.key==="d"||event.key==="D") && end == 0){
        if(parseInt(power.innerHTML)<99){
            power.innerHTML=parseInt(power.innerHTML)+1;
        }
    }
}
)

    window.addEventListener("keydown",function(event){
        if((event.key==="Enter") && end == 0){
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

var pocketTank = document.getElementById("pocketTank");
var playButton = document.getElementById("playButton");
var popup = document.getElementById("popup");
var health1 = document.getElementById("health1");
var health2 = document.getElementById("health2");
function play() {
    
    pocketTank.style.visibility="hidden";
    playButton.style.visibility="hidden";
    popup.style.visibility="hidden";
    health1.style.width="100%";
    health2.style.width="100%"
    end = 0;
    start();

}


