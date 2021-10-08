function fire(pow , angl , dir) {
    var ball = document.getElementById("fireball");
    const pi = Math.PI;
    // var pow = 100;
    // var angl = 88;
    var incr =0;
    if(angl >75){
        incr = 15;  
    }
    var t;
    var rng ;
    // var dir =1;
    var i=100 , y;
    angle(angl);
    function angle(angl){
        radian = angl*(pi/180);
        range(pow+18 , radian);
    }
    function range(pow , radian ){
        rng =  (pow*pow) * (Math.sin(2*radian))/10;
        time(pow , radian);
    }
    function time(pow , radian){
        t = (pow*(Math.sin(radian)))/10;
        projectile(pow ,angl ,rng ,dir);
    }
    function projectile(pow , angl , rng , dir){
        setTimeout(function(){
            ball.style.left=i+"px";
            y = 550 -( (Math.tan(radian))*(i -100) - ( 10*((i -100)*(i -100)) )/ (  (2*(pow*(Math.cos(radian)) ) )* (pow*(Math.cos(radian)))   ) );
            ball.style.top= y + "px";
            i=i+2;
            if((i -100) <= rng+100){
                projectile(pow , angl , rng , dir);
            }
        },(t+incr))
    }
}