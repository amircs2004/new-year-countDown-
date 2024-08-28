const dayEL = document.getElementById("day");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

const newYearTime  = new Date("jan 1 , 2022 00:00:00").getTime()
updateCounter()

function updateCounter() {
    const now = new Date().getTime()
    const gap = newYearTime - now

    const second = 1000 
    const minute = second*60
    const hour = minute*60 
   const day = hour*24





}