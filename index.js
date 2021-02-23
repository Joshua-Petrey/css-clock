const secondHand = document.querySelector('.second-hand') ;
const minuteHand = document.querySelector('.minute-hand') ;
const hourHand = document.querySelector('.hour-hand') ;

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsToDegrees = ((seconds / 60) * 360) + 90 ;
    const minutesToDegrees = ((minutes / 60) * 360) + 90 ;
    const hoursToDegrees = (( hours / 60) * 360) + 90 ;

    // fixes transition effect glitch when degrees reset
    if (secondsToDegrees || minutesToDegrees || hoursToDegrees === 440) {
        secondHand.classList.remove('transition') ;
        minuteHand.classList.remove('transition') ;
        hourHand.classList.remove('transition') ;
    } else {
        secondHand.classList.add('transition') ;
        minuteHand.classList.add('transition') ;
        hourHand.classList.add('transition') ;
    }
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)` ;
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)` ;
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)` ;


}

setInterval(getTime, 1000) ;
getTime();
