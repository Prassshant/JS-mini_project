let timer=60;
let score = 0;
let hitrn=0;

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function makeBubble(){   
let baloon="";
for(let i=1; i<100; i++){
    const number=Math.floor(Math.random()*10);
   baloon +=` <div class="bubble";>${number}</div>`;
}
const randomColor=function(){
    const hex ='0123456789ABCDEF';
    let color='#'
for ( let i= 0; i < 6;i++) {
    color+=hex[Math.floor(Math.random()*16)]
}
return color;
};
document.querySelector("#pbtm").innerHTML = baloon;

}


function runTimer(){
  const timeval= setInterval(function(){
    if(timer>0){
        
        timer--;
        document.querySelector('#timerval').textContent = timer
    }  else{
        clearInterval(timeval);
        document.querySelector("#pbtm").innerHTML=`<h1>Game over:Your score ${score}</h1>`
    } 
 

    },1000)
}
   
function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
   
    document.querySelector("#hitval").textContent =hitrn;
}
//checking bubble no is matching hit no.
document.querySelector("#pbtm").addEventListener("click", function(event) {
    let clickednum = Number(event.target.textContent);//the event.target refers to the element that was clicked. You retrieve the clicked number from the clicked element's text content and compare it with the hitrn value. If they match, the increaseScore function is called to increase the score.
    if (clickednum === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });
  

makeBubble();
runTimer();
getNewHit();



//event bubling = jispe click karoge uss particular event raise hoga,aur event listner naa milne  par event element ke parent par listner dhundaga,wah v nahi milna apar eevent parent k parent ke parent par listner dhundega//