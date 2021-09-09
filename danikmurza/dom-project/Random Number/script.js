let sumOut = ()=> {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let a = Number(Math.random() * (max - min) + min).toFixed();
    document.getElementById('sum').innerHTML = a;

}

let clearOut = ()=> {
    document.getElementById('sum').innerHTML = '';

}
