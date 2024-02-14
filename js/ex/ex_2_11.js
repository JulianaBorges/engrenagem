const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener ("submit" , (e) => {
    const preco = Number(frm.inPreco.value)
    const produto = frm.inProduto.value

    const promocao = preco * 2 + (preco / 2)

    resp.innerText = `${produto} - Promoção: Leve 3 por R$ ${promocao}`

    e.preventDefault()
});