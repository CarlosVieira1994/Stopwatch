var seconds = 0
var minutes = 0
var hours = 0
var interval = 0
var timerStart = false

function start() {
   if (timerStart === false) {
    timer()
    interval = setInterval(timer, 1000)
   }
   timerStart = true
}
function pause() {
    clearInterval(interval)
    timerStart = false
} 
function stop() {
    clearInterval(interval)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('timer').innerText = '00:00:00'
    timerStart = false
} 

function twoCharacters(character){
    if (character < 10){
        return('0'+character)
    }else {
        return(character)
    }

}

function timer() {
    seconds++
    if (seconds == 60) {
        minutes++
        seconds = 0
    }
    if (minutes == 60) {
        hours++
        minutes= 0
    }
    document.getElementById('timer').innerText = twoCharacters(hours)+':'+twoCharacters(minutes)+':'+twoCharacters(seconds)
} 