// esses programas foi criado para rodar no terminal
//Programador: Juliana Borges
//versão: 1

console.log("estou aqui :)")
const prompt = require('prompt-sync')(); //para digitar dados no terminal


// Programa que calcula a circunferência
const pi = 3.14159265;
let inRaio = "10";
let outResuldadoCircunferencia = "";

outResuldadoCircunferencia = pi * Math.pow(inRaio,2);

console.log(outResuldadoCircunferencia);



// Programa que calcula a quantidade de combustivel usado em uma viagem
let inTempo = prompt('Qual o tempo pecorrido na viagem?: ')
let inVelocidade = prompt('Qual a distância percorrida na viagem?: ')
let inQuilometroLitro = 12

function QuantidadeLitroDistancia() {    
   
    let outTotalLitro = (inTempo * inVelocidade) / inQuilometroLitro
  
    console.log(Math.floor(outTotalLitro))
}

QuantidadeLitroDistancia();


// Programa que Calcula volume
const inAlturaGarrafa = prompt('Qual a altura da Garafa?: ')
const inRaioGarrafa = prompt('Raio da Garrafa?: ')
const inPi = 3.14159 

function CalcularVolume() {

    let outVolume = (inPi * Math.pow(inRaioGarrafa, 2)) * inAlturaGarrafa
    
    console.log(outVolume)
    
}

CalcularVolume()



// Programa que adiciona, seleciona e remove elementos na lista.
let outListaGenerica = []
let linguagensDeProgramacao = ['javascript', 'c++', 'c', 'Kotlin', 'Python']
let tipoDeTransportes = ['carro' ,'moto' , 'bike']


function adicionandoElementoNaLista() {
   
    for(let i = 1; i <= 5; i = i + 1){
        
        outListaGenerica.push(prompt('Adicione um elemento qualquer: '))
        console.log(outListaGenerica)
    }
    
    linguagensDeProgramacao.push(prompt('adicione uma linguagem: '))
    console.log(linguagensDeProgramacao)

}

adicionandoElementoNaLista()

function SelecioneElementoNaLista() {

    console.log(`Lista de transporte: ${tipoDeTransportes}`)    
    let selecione = tipoDeTransportes.includes(prompt('Selecione um transporte: '))
    
    if(selecione != true){    

        console.log('Não contém o elemento na lista!')

    }else{
        
        console.log(selecione)
    }

}

SelecioneElementoNaLista()
