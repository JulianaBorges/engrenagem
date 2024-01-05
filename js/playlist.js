console.log('estou aqui')

let musicas = [
    {titulo: 'Musica 01', artista: 'Artista 01', src:'/musicas/Cartoon - On & On (feat. Daniel Levi) [NCS Release].mp3', img:'/img/Capturar.png'},
    {titulo: 'Musica 02', artista: 'Artista 02', src:'/musicas/yanvince, comusal - magnificent [NCS Release].mp3', img:'/img/fruit-6620951_1280.jpg'}
]

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracao = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
} )


//funçõe

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src )
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracao.textContent  = converteTempo(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoInicio = document.querySelector('.inicio');
    tempoInicio.textContent = converteTempo(Math.floor(musica.currentTime))

}

function converteTempo(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' +campoSegundos;
}

