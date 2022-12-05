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
    let c
    let d
    const massiv = []
    let key = true
    switch (key) {
        case a > b && b > 0:
            c = -b
            d = a
            break;
        case a > b && b < 0:
            c = b
            d = a
            break;
        case a < b && a > 0:
            c = -a
            d = b
            break;
        case a < b && a < 0:
            c = a
            d = b
            break;
        default:
            c = a
            d = b
            break;
    }
    console.log(c)
    console.log(d)
    for (let i = c; i <= d; i++) {
        delitelA = c/i
        delitelB = d/i
        if (Number.isInteger(delitelA) && Number.isInteger(delitelB)) {
            massiv.push(i)
        }
    result.innerHTML = `общих делителей - ${massiv.length} <br/> самый маленький делитель - ${Math.min.apply(null, massiv)}` //Math.max(...massiv)
    }

}

buttonResult.addEventListener('click', SP);
