document.addEventListener("DOMContentLoaded", () => {
    const formFilme = document.getElementById("formFilmeForm");
    const formQuandrienios = document.getElementById("formQuandrieniosForm");
    const formLanHouse = document.getElementById("formLanHouseForm");

    formFilme.addEventListener("submit", (e) => {
        e.preventDefault();
        converterFilme();
    });

    formQuandrienios.addEventListener("submit", (e) => {
        e.preventDefault();
        calcularQuandrienios();
    });

    formLanHouse.addEventListener("submit", (e) =>{
        e.preventDefault();
        calcularLanHouser();
    } )
});

function converterFilme() {
    const titulo = document.getElementById("inTitulo").value;
    const duracao = parseInt(document.getElementById("inDuracao").value);
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    document.getElementById("resTitulo").innerText = `Filme: ${titulo}`;
    document.getElementById("resDuracao").innerText = `Duração: ${horas}h ${minutos}min`;
}

function calcularQuandrienios() {
    const salario = Number(document.getElementById("inSalario").value);
    const tempo = Number(document.getElementById("inTempo").value);

    let quadrienios = Math.floor(tempo / 4);
    let acrescimo = (salario * quadrienios) / 100;

    document.getElementById("outResp01").innerText = `Quantidade de Quadrienios: ${quadrienios} (anos)`;
    document.getElementById("outResp02").innerText = `Novo Salário R$: ${(salario + acrescimo).toFixed(2)}`;
}

function calcularLanHouser(){
        const valor = Number(document.getElementById("inValor").value)
        const tempo = Number(document.getElementById("inTempo").value)

        let valorTempo = tempo / 15
        let total = Math.ceil(valorTempo) * valor

        document.getElementById("outCredito").innerHTML = `Valor a pagar R$: ${total.toFixed(2)} `
}