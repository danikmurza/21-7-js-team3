

let compare = (str1, str2) => {

    if(str1.toLowerCase() === str2.toLowerCase()) {
        return console.log(true)
    }if(str1.toLowerCase() !== str2.toLowerCase()){
        return console.log(false)
    }
}

compare("abc", "ABCs")
