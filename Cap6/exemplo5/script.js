const form = document.querySelector('form')
const resposta = document.getElementById('resp')
const imprimir = document.getElementById('imprimir')
const maioresNotas = document.getElementById('fim')
const respComplemento = document.getElementById('complemento')

let alunos = []

form.addEventListener('submit', e => {
  e.preventDefault()
  let nome = form.nome.value
  let nota = Number(form.nota.value)
  alunos.push({
    nome,
    nota
  })
  alert('Aluno cadastrado!')
  form.reset()
  form.nome.focus()

  console.log(alunos)
})

let imprimeAlunos = ''

imprimir.addEventListener('click', () => {
  resposta.innerText = ''
  if (alunos.length === 0) {
    return alert('Não há alunos cadastrados')
  }
  for (const aluno of alunos) {
    imprimeAlunos += `Aluno(a): ${aluno.nome} 
    Nota: ${aluno.nota}\n\n`
  }

  resposta.innerText = imprimeAlunos
})

maioresNotas.addEventListener('click', () => {
  //
  // let maiorNota = alunos.reduce((a, b) => {
  //   return Math.max(a.nota, b.nota)
  // })
  let maiorNota = 0
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
      maiorNota = alunos[i].nota
    }
  }
  console.log(maiorNota)
  if (maiorNota < 7) {
    respComplemento.innerText = 'Não há alunos em destaque na turma!'
  }

  let alunosDestaque = []
  let copia = [...alunos]
  copia.map(alun => {
    if (alun.nota == maiorNota) {
      alunosDestaque.push(alun.nome)
    }
  })
  console.log(alunosDestaque)
  respComplemento.innerText = `Maior nota: ${maiorNota}\n Aluno(s) destaque: ${alunosDestaque.join(
    ', '
  )} `
})
