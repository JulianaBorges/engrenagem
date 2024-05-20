const frm   =   document.querySelector("form")
const resp1 =   document.querySelector("#outResp01")
const resp2 =   document.querySelector("#outResp02")

frm.addEventListener ("submit", (e) => {
    const salario = Number(frm.inSalario.value)
    const tempo = Number(frm.inTempo.value)

    quadrienios = Math.floor(tempo / 4)
    acrescimo = salario * quadrienios / 100

    resp1.innerHTML = `Quantidade de Qadrienios : ${quadrienios} (anos)`
    resp2.innerHTML = `Novo Salário R$: ${(salario+acrescimo).toFixed(2)}`

    e.preventDefault()
})