const form = document.querySelector('form')
const resp = document.querySelector('pre')
const itens = [] // vetor global para armazenar os itens dos pedidos

// controla exibição dos selects
form.rbPizza.addEventListener('click', () => {
  form.inBebida.className = 'oculta'
  form.inPizza.className = 'exibe'
})
form.rbBebida.addEventListener('click', () => {
  form.inBebida.className = 'exibe'
  form.inPizza.className = 'oculta'
})

form.inDetalhes.addEventListener('focus', () => {
  if (form.rbPizza.checked) {
    const pizza = form.inPizza.value
    // indica o numero de sabores
    const num = pizza == 'media' ? 2 : pizza == 'grande' ? 3 : 4
    // exibi dica para preenchimento de campo
    form.inDetalhes.placeholder = `Até ${num} sabores`
  }
})
// evento quando o campo perde o foco
form.inDetalhes.addEventListener('blur', () => {
  form.inDetalhes.placeholder = ``
})

form.addEventListener('submit', e => {
  e.preventDefault()

  let produto

  if (form.rbPizza.checked) {
    const num = form.inPizza.selectedIndex
    produto = form.inPizza.options[num].text
  } else {
    const num = form.inBebida.selectedIndex
    produto = form.inBebida.options[num].text
  }

  const detalhes = form.inDetalhes.value
  itens.push(produto + '(' + detalhes + ')')
  resp.innerText = itens.join('\n')

  form.reset()
  form.rbPizza.dispatchEvent(new Event('click'))
})
