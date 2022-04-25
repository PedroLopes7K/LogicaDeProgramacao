// ÁRVORE DE ESTRELAS
// const prompt = require('prompt-sync')()
// const altura = Number(prompt('Altura da árvore: '))
const altura = 8
console.log() // linha em branco
for (let i = 1; i <= altura; i++) {
  const espacos = 22 - i
  console.log(' '.repeat(espacos) + '*'.repeat(i * 2))
  if (i == altura) {
    for (let y = 0; y < 4; y++) {
      console.log(' '.repeat(espacos + 6) + '*'.repeat(4))
    }
    for (let z = 0; z < 2; z++) {
      console.log(' '.repeat(espacos) + '*'.repeat(i * 2))
    }
  }
}
