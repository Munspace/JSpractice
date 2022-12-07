const ta = document.querySelector('#ta')
const result = document.querySelector('.result')

let massiv = []


function blur() {
    massiv = ta.value.split(' ')
    massiv = massiv.filter((el) => el != '')   
    console.log(massiv)
    result.innerHTML = `количество слов ${massiv.length}`
}

function focus() {
    result.innerHTML = ``
}


ta.addEventListener('blur', blur)
ta.addEventListener('focus', focus)
