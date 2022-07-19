//NUMEROS

function AddNumber7() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `7`
}

function AddNumber8() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `8`
}

function AddNumber9() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `9`
}

function AddNumber4() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `4`
}

function AddNumber5() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `5`
}

function AddNumber6() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `6`
}

function AddNumber1() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `1`
}

function AddNumber2() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `2`
}

function AddNumber3() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `3`
}

function AddNumber0() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `0`
}

function AddDot() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `.`
}

function Calcular() {
   let resultado = document.getElementById('mostrarRes').innerHTML;

   if (resultado) {
    document.getElementById('mostrarRes').innerHTML = eval(resultado)
   }
}

//OPERADORES

function Clear() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML = ``
}


function Dividir() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `/`

}

function Multiplicar() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `*`
}

function Subtrair() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `-`
}

function Somar() {
    let res = document.getElementById('mostrarRes')
    res.innerHTML += `+`
}







































