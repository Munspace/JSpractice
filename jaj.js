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
    function Ra() {
        
        if (a*a === (b*b + c*c)) {
            result.innerHTML = `эти цифры тройка пифагора <br/> ${a} самое большое число`
        } else {
            console.log(a)
            result.innerHTML = `это не тройка Пифагора`
            }
        }
    let a 
    let b
    let c
    let d = true
    if ((dlinaA.value == dlinaB.value) || (dlinaC.value == dlinaA.value) || (dlinaB.value == dlinaC.value)) {
        result.innerHTML = `некоторые числа равны`
    } else {
        switch (d) {
            case Number(dlinaA.value) > Number(dlinaB.value) && Number(dlinaA.value) > Number(dlinaC.value):
                a = Number(dlinaA.value)
                b = Number(dlinaB.value)
                c = Number(dlinaC.value)
                break;
            case Number(dlinaB.value) > Number(dlinaA.value) && Number(dlinaB.value) > Number(dlinaC.value):
                a = Number(dlinaB.value)
                b = Number(dlinaA.value)
                c = Number(dlinaC.value)
                break;
            case Number(dlinaC.value) > Number(dlinaA.value) && Number(dlinaC.value) > Number(dlinaB.value):
                a = Number(dlinaC.value)
                b = Number(dlinaA.value)
                c = Number(dlinaB.value)
                break;
            default:
                result.innerHTML = `нету единственного большого числа`
                break;
        }
        Ra()
           
    }
    

}

buttonResult.addEventListener('click', SP);
