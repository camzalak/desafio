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

const botao = document.querySelector('#botao'); 

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagem = (imagem, nomeDoPersonagem, especie, condicao) => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });    
}

botao.onclick = () => {pegarPersonagem(imagemA, nomeDoPersonagemA, especieA, condicaoA);
                       pegarPersonagem(imagemB, nomeDoPersonagemB, especieB, condicaoB);
                       pegarPersonagem(imagemC, nomeDoPersonagemC, especieC, condicaoC);
                      };