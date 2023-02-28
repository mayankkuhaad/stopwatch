const main_timer = document.querySelector(".timer");
const start_button = document.getElementById('start');
const pause_button = document.getElementById('pause');
const reset_button = document.getElementById('reset');
const cast_button = document.getElementById('cast');

start_button.addEventListener('click',start_time);
pause_button.addEventListener('click',pause_time);
reset_button.addEventListener('click',reset_time);
cast_button.addEventListener('click',cast_time);

let miniseconds = 0;
let inSession = null;

let castCounter = 1;



function reset_time(){
    pause_time();
    miniseconds=0;
    main_timer.innerText="00:00:00:000"
    castCounter=1;
    for(let i=1; i<11; i++){
        let index = "item" + i;
        var itemMember = document.getElementById(index);
        itemMember.innerText="";


    }    
}

function pause_time(){
    clearInterval(inSession);
    inSession = null;
}

function cast_time(){
    // let currentTime = document.getElementById("timer").getAttribute('value');
    let currentTime =   main_timer.innerText

    console.log(currentTime);
 
    let index = "item" + castCounter;
    var itemMember = document.getElementById(index);
    currentTime = "Cast " + castCounter + ": " + currentTime;
    itemMember.innerText=currentTime;
    castCounter++;

}


function start_time(){
    if(inSession){
        return;
    }
    inSession = setInterval(update_time,1)
}

function update_time(){
    miniseconds++;
    let ms = Math.floor(miniseconds % 1000);
    let s = Math.floor(miniseconds / 1000);
    let h = Math.floor(s/3600);
    let m = Math.floor((s-(h*3600)/60));
    s = s%60;

    if(ms<10){
        ms= '00'+ms;
    }else if(m<100){
        ms='0'+ms;
    }
    if(s<10){
        s = '0' + s;
    }
if(m<10){
    m = '0' + m;
}
if(h<10){
    h = '0'+h;
}

    main_timer.innerText = `${h}:${m}:${s}:${ms}`;
}



