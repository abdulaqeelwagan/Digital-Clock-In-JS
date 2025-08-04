// Digital Clock In JS
let hour = document.getElementById("hour")
let mint = document.getElementById("mint")
let second = document.getElementById("second")
let day = document.getElementById("day")

function updateClock(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    let period
    if (hours >= 12) {
        period = "PM"
    } else {
        period = "AM"
    }

    if (hours === 0) {
        hours = 12
    } else if (hours > 12) {
        hours = hours - 12
    }

    hour.innerHTML = `${hours} : `
    mint.innerHTML = `${minutes} : `
    second.innerHTML = `${seconds} ${period}`
}

setInterval(updateClock, 1000)
updateClock()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();          
const dayIndex = today.getDay();   
const dayName = days[dayIndex];  


day.innerHTML =  dayName