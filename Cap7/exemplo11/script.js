// GERAR DATA DE VENCIMENTO DE PARCELAS

const parcelas = 7
const data = new Date() // data atual
for (let i = 1; i <= parcelas; i++) {
  data.setMonth(data.getMonth() + 1) // aumenta um mês na data
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()
  const diaZero = dia < 10 ? '0' + dia : dia // acrescenta 0 se o dia for menor que 10
  const mesZero = mes < 10 ? '0' + mes : mes // acrescenta 0 se o mes for menor que
  console.log(` Parcela ${i}. ${diaZero}/${mesZero}/${ano} `)
}
