const frm        = document.querySelector("form")
const resp       = document.querySelector("h3")
const respidade  = document.getElementById("idade")


frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const idade = frm.inIdade.value
    
    resp.innerText = `Nome: ${nome}`
    respidade.innerText = `Idade: ${idade}`
    
    e.preventDefault()
});