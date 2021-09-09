let simpleTimer = (num) => {
    let hour = Math.floor((num / 60) / 60)
    let minute = Math.floor(num / 60);
    let minutes = minute
    let sec = num % 60;
    if (minute > 60) {
        let a = (minute / 60).toFixed()
        minutes = minute - (a * 60)
    }
    if (sec + ''.length < 10) {
        sec = '0' + sec;
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    return hour + ":" + minutes + ":" + sec;
}

console.log(simpleTimer(7777))

