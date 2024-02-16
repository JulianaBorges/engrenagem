const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener ("submit" , (e) => {
    const preco = Number(frm.inPreco.value)
    const produto = frm.inProduto.value

    
    const promocao = preco / 2
    const valor = preco * 2 + promocao 

    resp.innerText = `${produto} - Promoção: Leve 3 por R$ ${valor}`
    resp1.innerText = `O 3º produto sai por apenas R$ ${promocao}`

    e.preventDefault()
});