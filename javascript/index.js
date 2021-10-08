var a = null
const pi = Math.PI;
var pow = 30;
var angl =45;
var rng;
var dir =1;
var i=0 , y=0;
angle(angl);
function angle(angl){
    radian = angl*(pi/180);
    range(pow , radian);
}
function range(pow , radian ){
    rng = (pow*pow) * (Math.sin(2*radian))/10;
    console.log(rng);
    projectile(pow ,angl ,rng ,dir);
}
function projectile(pow , angl , rng , dir){
    setTimeout(function(){
        console.log(y)
        y = (Math.tan(radian))*i - ( 10*(i*i) )/ (  (2*(pow*(Math.cos(radian)) ) )* (pow*(Math.cos(radian)))   );
        i++;
        if(i <= rng){
            projectile(pow , angl , rng , dir);
        }
    },1)
}