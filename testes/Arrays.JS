// EXERCICIO 1
const nomes = ['Pedro', 'Lucas', 'Amanda', 'Maria']
const notas = [4, 7, 9, 10]

const NotasEAlunos = [nomes, notas]

const pesquisaAluno = aluno => {
  // includes confere se nome existe no array 0
  if (NotasEAlunos[0].includes(aluno)) {
    // indexof pega o a posição que o nome se encontra
    let indice = NotasEAlunos[0].indexOf(aluno)
    return `${NotasEAlunos[0][indice]}, sua nota é ${NotasEAlunos[1][indice]}`
  } else {
    return `${aluno} não encontrado!`
  }
}

// console.log(pesquisaAluno('Amanda'))

// EXERCICIO 2

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0
let medias = []
let tamanho = []
for (let i = 0; i < notasGerais.length; i++) {
  tamanho.push(notasGerais[i].length)
  notasGerais[i].forEach(nota => {
    media += nota
  })
  medias.push(media)
  media = 0
}
console.log(tamanho)
console.log(medias)
medias.forEach((item, i) => {
  console.log(`Media ${i + 1} =  ${item / tamanho[i]}`)
})

// EXERCICIO 3

// FOREACH USADO PARA CHAMAR OUTRA FUNÇÃO
const alunos = ['pedro', 'juliana', 'marcos']
alunos.forEach(imprimeAlunos)

function imprimeAlunos(nome) {
  console.log(nome)
}
