const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []

frm.addEventListener('submit', e => {
  e.preventDefault()
  const nome = frm.inPaciente.value
  pacientes.push(nome)
  let lista = ''
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`
  }
  respLista.innerText = lista
  frm.inPaciente.value = ''
  frm.inPaciente.focus()
})

frm.btUrgencia.addEventListener('click', () => {
  // verifica se as validações do form estão ok (no caso, pacientes is required)
  //  frm.checkValidaty == false
  if (!frm.checkValidity()) {
    alert('Informe o nome do paciente a ser atendido em caráter de urgência')
    frm.inPaciente.focus()
    return // retorna ao form
  }
  const nome = frm.inPaciente.value
  pacientes.unshift(nome) // adiciona o paciente no inicio do vetor
  let lista = ''
  // forEach aplicado sobre o array paciente
  pacientes.forEach((paciente, indice) => {
    lista += ` ${indice + 1}. ${paciente}\n`
  })
  respLista.innerText = lista // exibe a lista de pacientes
  frm.inPaciente.value = ''
  frm.inPaciente.focus()
})

frm.btAtender.addEventListener('click', () => {
  if (pacientes.length == 0) {
    alert('Não há pacientes para serem atendidos no momento!')
    frm.inPaciente.focus()
    return
  }
  const atender = pacientes.shift()
  respNome.innerText = atender
  let lista = ''
  pacientes.forEach((paciente, indice) => {
    lista += ` ${indice + 1}. ${paciente}\n`
  })
  respLista.innerText = lista
})
