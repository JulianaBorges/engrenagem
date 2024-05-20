const frm = document.querySelector('form')
const resp01 = document.querySelector("h1")
const resp02  = document.querySelector("h2")
// const resTitulo = document.getElementById("resTitulo")
// const resDuracao = document.getElementById("resDuracao")


frm.addEventListener("submit", (e) => {

    const titulo  = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    console.log("to aqui")

    resp01.innerText = titulo
    resp02.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    
    e.preventDefault()

})