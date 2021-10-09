function fire(pow = 45, angl=29, dir= 1) {
    var ball = document.getElementById("fireball");
    const pi = Math.PI;
    // var pow = 100;
    // var angl = 88;
    var save;
    var incr =0;
    var tank_pos = document.getElementsByClassName("tank")[0].offsetLeft ;
    if(dir == -1){
        tank_pos = document.getElementsByClassName("tank")[1].offsetLeft  ;
    }
    if(angl >75){
        incr = 15;  
    }
    if(angl < 60 && angl > 30){
        incr = -15;
    }
    var t;
    var rng ;
    // var dir =1;
    var i= tank_pos , y;             //position of tank 1/2 from left side 


    angle(angl);
    function angle(angl){
        radian = angl*(pi/180);
        range(pow+30 , radian);
    }
    function range(pow , radian ){
        rng =  (pow*pow) * (Math.sin(2*radian))/10;
        time(pow , radian);
    }
    function time(pow , radian){
        t = (pow*(Math.sin(radian)))/10;
        if(dir ==-1)
            i = (Math.tan(radian) + Math.sqrt(Math.tan(radian)*Math.tan(radian) - (20/((pow*(Math.cos(radian)))*(pow*(Math.cos(radian)))) )))/ (10/((pow*Math.cos(radian))*(pow*Math.cos(radian))) );
        save = i;
        console.log(i);
        if(dir ==1)
            projectile1(pow ,angl ,rng );
        else
            projectile2(pow , angl , rng);
    }
    function projectile1(pow , angl , rng ){
        setTimeout(function(){
            ball.style.left=i+(tank_pos -save)+"px";
            y = 560 -( (Math.tan(radian))*(i - tank_pos) - ( 10*((i - tank_pos)*(i - tank_pos)) )/ (  (2*(pow*(Math.cos(radian)) ) )* (pow*(Math.cos(radian)))   ) );
            ball.style.top= y + "px";
            i=i+2;
            if(  y  <= 650){
                projectile1(pow , angl , rng );
            }
        },(t+incr))
    }
    function projectile2(pow  , angl , rng){
        setTimeout(function(){
            ball.style.left= i+(tank_pos - save)+"px";
            y = 560 -( (Math.tan(radian))*(i) - ( 10*((i)*(i)) )/ (  (2*(pow*(Math.cos(radian)) ) )* (pow*(Math.cos(radian)))   ) );
            ball.style.top = y+"px";
            i = i-2;
            if( y <=650 ){
                projectile2(pow , angl , rng);
            }
        },(t+incr))
    }
}