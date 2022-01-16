const imagemA = document.querySelector('#imgA');
const nomeDoPersonagemA = document.querySelector('#nomeA');
const especieA = document.querySelector('#especieA');
const condicaoA = document.querySelector('#condicaoA');

const imagemB = document.querySelector('#imgB');
const nomeDoPersonagemB = document.querySelector('#nomeB');
const especieB = document.querySelector('#especieB');
const condicaoB = document.querySelector('#condicaoB');

const imagemC = document.querySelector('#imgC');
const nomeDoPersonagemC = document.querySelector('#nomeC');
const especieC = document.querySelector('#especieC');
const condicaoC = document.querySelector('#condicaoC');

const botao = document.querySelector('button'); 

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorioA();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
        method:'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    })
};

botao.onclick = () => {pegarPersonagem(imagemA, nomeDoPersonagem1, especie1, condicao1);
                       pegarPersonagem(imagemB, nomeDoPersonagem2, especie2, condicao2);
                       pegarPersonagem(imagemC, nomeDoPersonagem3, especie3, condicao3)};