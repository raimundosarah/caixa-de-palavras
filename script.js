import { PALAVRAS_CHAVE } from "./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);
    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u).map(p => p.toLowerCase());
    palavras = palavras.filter(p => PALAVRAS_CHAVE.has(p) && p.length > 2);

    const frequencias = {};
    for (const palavra of palavras) {
        frequencias[palavra] = (frequencias[palavra] || 0) + 1;
    }

    return Object.keys(frequencias)
        .sort((a, b) => frequencias[b] - frequencias[a])
        .slice(0, 10);
}