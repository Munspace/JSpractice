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
    const massiv = []
    for (let i = 1; i <= a; i++) {
        let b = a/i
        if (Number.isInteger(b)) {
            massiv.push(b)
            
        }
    result.innerHTML = `делителей - ${massiv.length} <br/> делители ${massiv}`
    }
    
}

buttonResult.addEventListener('click', SP);
