const time=document.querySelector("#the-time");
const showText=document.getElementById("showText");
const mainText=document.querySelector(".text").innerHTML;
const trueIcone=document.getElementById("true");
const falseIcone=document.getElementById("false");
const resetBtn=document.getElementById("reset");
var TIMER=[0,0,0,0];
var test=false;
var interval;
function zeroTime(num){
    if(num<10){
        num="0"+num;
    }
    return num;
}
function runTime(){
    let myTime=zeroTime(TIMER[0])+":"+zeroTime(TIMER[1])+":"+zeroTime(TIMER[2]);
    time.innerHTML=myTime;
    TIMER[3]++;
    TIMER[0]=Math.floor(TIMER[3]/100/60);
    TIMER[1]=Math.floor((TIMER[3]/100)-(TIMER[0]*60));
    TIMER[2]=Math.floor(TIMER[3]-(TIMER[1]*100)-(TIMER[0]*6000));
}
function start(){
    let sizeText=showText.value;
    if(sizeText>=0 && test==false){
        interval =setInterval(runTime,10);
        test=true;
    }
}
function textCheck(){
    let userText=showText.value;
    let text=mainText.substring(0,userText.length);
    if(mainText==userText){
        clearInterval(interval);
        trueIcone.style.color="green";
    }else{
        if(userText==text){
            trueIcone.style.color="";
            falseIcone.style.color="";
            
        }else{
            falseIcone.style.color="red";
        }
    }
}
function reset(){
    clearInterval(interval);
    interval=null;
    test=false;
    TIMER=[0,0,0,0];
    showText.value="";
    time.innerHTML="00:00:00";
    trueIcone.style.color="";
    falseIcone.style.color="";
}
showText.addEventListener("keyup",textCheck);
showText.addEventListener("keypress",start);
resetBtn.addEventListener("click",reset);

