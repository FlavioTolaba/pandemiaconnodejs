function fnObj() {
    // closure
    let x = 2
    return () => {
        x++
        return x
    }
}

let fnMas = fnObj()
console.log(fnMas())
console.log(fnMas())
console.log(fnMas())

/*
Caracteristica de la programacion orientada a objetos
funcionalidad y tiene datos internos inaccesibles
*/
