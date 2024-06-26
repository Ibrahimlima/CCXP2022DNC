const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const launch = "26 aug 2024";


function countDomw(){
    const dateLaunch = new Date(launch);
    const today = new Date();

    const fullSec = (dateLaunch - today)/1000;
    const finalDays = Math.floor(fullSec /60 /60/24);
    const finalHours = Math.floor(fullSec/60/60)%24;
    const finalmin = Math.floor(fullSec/60)%60
    const finalsec = Math.floor(fullSec)%60

    day.innerHTML = timeFormat(finalDays);
    hour.innerHTML = timeFormat(finalHours);
    min.innerHTML = timeFormat(finalmin);
    sec.innerHTML = timeFormat(finalsec);
}

function timeFormat(time){
    return time < 10? `0${time}` : time;
}


countDomw()
setInterval(countDomw, 1000)