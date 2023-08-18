var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makebubble(){
    var clutter = "";

for( var i = 1; i<=85; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<span class="bubble">${rn}</span>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    var timerint = setInterval( function() {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}

function getnewhit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        getnewhit();
        makebubble();
    }
})

makebubble();
runtimer();
getnewhit();
