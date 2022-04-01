let ladoA = 11
let ladoB = 14
let ladoC = 5

let total = ladoA + ladoB + ladoC
console.log(total)
if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
  console.log('Os lados não podem formar um triangulo!')
} else {
  console.log('Os lados podem formar um triangulo!')
  if (ladoA == ladoB && ladoA == ladoC) {
    console.log('Triangulo Equilatero!')
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log('Triangulo Isóceles!')
  } else {
    console.log('Triangulo Escaleno!')
  }
}
