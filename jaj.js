const dlinaA = document.getElementById('a')
const dlinaB = document.getElementById('b')
const dlinaC = document.getElementById('c')
const buttonResult = document.querySelector('.bresult')
const result = document.querySelector('.result')
// 

console.log('f')
// let a = dlinaA.value
// let b = dlinaB.value
// console.log(a)
// console.log(b)

function SP() {
    let a = Number(dlinaA.value)
    let b = Number(dlinaB.value)
    let c = Number(dlinaC.value)
    console.log(a)
    console.log(b)
    let x1
    let x2
    
    const d = b*b - 4*a*c
    console.log(d)
    if (d>0) {
        console.log(d)
        x1 = ((-b + Math.sqrt(d))/(2*a))
        console.log(x1)
        x2 = ((-b - Math.sqrt(d))/(2*a))
        result.innerHTML = `${Math.round(x1)} -первый корень <br/> ${Math.round(x2)} -второй корень`
    } 
    if (d == 0) {
        x1 = -b/(2*a)
        result.innerHTML = `уровнение имеет 1 корень ${x1}`
    }
    if (d<0) {
        result.innerHTML = `уравнение неправильное`
    }
}

buttonResult.addEventListener('click', SP);
