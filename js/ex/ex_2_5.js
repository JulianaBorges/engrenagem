const frm   = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e) => {
    const remedio = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)

    const entrada = Math.round(preco * 2)
    
    resp1.innerText = `Promoçôes: ${remedio}`
    resp2.innerText = `Leve 2 ${remedio} por apenas R$ ${entrada},00` 

    e.preventDefault()
});