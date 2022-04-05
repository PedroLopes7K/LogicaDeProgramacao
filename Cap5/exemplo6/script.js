const form = document.querySelector('form')
const resp = document.getElementById('resp')
const numero = document.getElementById('numero')

form.addEventListener('submit', e => {
  e.preventDefault()
  const num = Number(numero.value)
  let divisores = 0
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      divisores++
    }
  }
  if (divisores == 2) {
    resp.innerText = `${num} é primo!`
  } else {
    resp.innerText = `${num} não é primo!`
  }
})
// let valor
// let temDivisor = 0

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   valor = Number(numero.value)
//   console.log(valor)
//   for (let i = 2; i <= valor / 2; i++) {
//     if (valor % i == 0) {
//       temDivisor = 1
//       break
//     }
//   }
//   if (valor > 1 && !temDivisor) {
//     resp.innerText = `${valor} é primo!`
//   } else {
//     resp.innerText = `${valor} não é primo!`
//   }
// })
