let simpleTimer = (num) => {
    let hour = Math.floor((num / 60) / 60)
    let minute = Math.floor(num / 60);
    let minutes = minute
    let sec = num % 60;
    if (sec + ''.length < 2) {
        sec = '0' + sec;
    }
    if (minute > 60) {
      let a =  (minute / 60).toFixed()
        minutes = minute - (a * 60)
    }


    return hour + ":" + minutes + ":" + sec;
}

console.log(simpleTimer(22222))

