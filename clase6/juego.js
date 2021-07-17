let montoInicial = 1
let TNA = 1

let montoFinal = montoInicial + (montoInicial * TNA);

console.log(montoFinal)

let intervalos = 52*24*60*60;

let arr = new Array(intervalos)
let tasaPeriodo = TNA / intervalos;

arr.fill(tasaPeriodo)

console.log(arr)

let total = arr.reduce((acum, interesPeriodo)=>{
    return acum + (acum * interesPeriodo);
}, montoInicial)

console.log(total)
console.log(Math.E)

