const dlinaA = document.getElementById('a')
const dlinaB = document.getElementById('b')
const dlinaC = document.getElementById('c')
const buttonResult = document.querySelector('.bresult')
const result = document.querySelector('.result')
 

console.log('f')


// Number(dlinaA.value)
// Number(dlinaB.value)
// Number(dlinaC.value)
function SP() {
    let a = Number(dlinaA.value)
    let b = Number(dlinaB.value)
    const massiv = []

    for (let i = 1; i <= a; i++) {
        delitelA = a/i
        delitelB = b/i
        if (Number.isInteger(delitelA) && Number.isInteger(delitelB)) {
            massiv.push(i)
        }
    result.innerHTML = `общих делителей - ${massiv.length} <br/> общие делители - ${massiv}`
    }
    
}

buttonResult.addEventListener('click', SP);
