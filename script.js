const imagemA = document.querySelector('#imgA');
const botao = document.querySelector('button');
const nomeDoPersonagemA = document.querySelector('#nomeA');
const especieA = document.querySelector('#especieA');
const condicaoA = document.querySelector('#condicaoA');
const imagemB = document.querySelector('#imgB');
const nomeDoPersonagemB = document.querySelector('#nomeB');
const especieB = document.querySelector('#especieB');
const condicaoB = document.querySelector('#condicaoB');

gerarValorAleatorioA = () => {
    return Math.floor(Math.random() * 671);
}

gerarValorAleatorioB = () => {
    return Math.floor(Math.random() * 670);
}

pegarPersonagem = () => {
    let numeroAleatorioA = gerarValorAleatorioA();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioA}` , {
        method:'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemA.src = data.image;
        imagemA.alt = data.name;
        nomeDoPersonagemA.innerHTML = data.name;
        especieA.innerHTML = data.species;
        condicaoA.innerHTML = data.status;
    })
};

pegarPersonagem = () => {
    let numeroAleatorioB = gerarValorAleatorioB();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioB}` , {
        method:'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemB.src = data.image;
        imagemB.alt = data.name;
        nomeDoPersonagemB.innerHTML = data.name;
        especieB.innerHTML = data.species;
        condicaoB.innerHTML = data.status;
    })
};

botao.onclick = pegarPersonagem;