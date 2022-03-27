const form = document.querySelector('form')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')

form.addEventListener('submit', e => {
  const produto = form.produto.value
  const preco = Number(form.preco.value)

  const promocao = preco * 2 + preco / 2

  h3.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(
    2
  )}  `
  h4.innerText = ` O Terceiro Produto sai por apenas R$: ${(preco / 2).toFixed(
    2
  )}`
  e.preventDefault()
})
