let timer =null;
let hours = 0;
let minutes = 0;
let seconds = 0;

let display = function(){
    let h = hours < 10 ? "0"+ hours : hours;
    let m = minutes < 10 ? "0"+ minutes : minutes;
    let s = seconds < 10 ? "0"+ seconds : seconds;
    document.getElementById('time').innerText=`${h}:${m}:${s}`
};

let toStart = function(){
    if (timer !== null){
        clearInterval(timer)
    }

    timer= setInterval(function(){
        seconds++;

    if (seconds == 60){
        seconds = 0
        minutes++;
    }

    if (minutes == 60){
        minutes = 0
        hours++
    }

    display();
    },1000)
}

let pause = function(){
    clearInterval(timer);
}

let reseting = function(){
    clearInterval(timer);
    seconds=0;
    minutes=0;
    hours=0;
    display();
}

document.querySelector('#start').addEventListener('click',toStart);
document.querySelector('#stop').addEventListener('click',pause);
document.querySelector('#reset').addEventListener('click',reseting);
