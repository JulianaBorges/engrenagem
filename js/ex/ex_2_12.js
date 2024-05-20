const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener ("submit", (e) => {
        const valor = Number(frm.inValor.value)
        const tempo = Number(frm.inTempo.value)

        valorTempo = tempo / 15
        total = Math.ceil(valorTempo) * valor

        resp.innerHTML = `Valor a pagar R$: ${total.toFixed(2)} `
        // resp1.innerHTML = `credito: `

    e.preventDefault()
});