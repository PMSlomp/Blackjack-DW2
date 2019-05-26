class Card {
    
    constructor(valor, simbolo) {
        this._valor = valor;
        this._simbolo = simbolo;
        this._imagem = `assets/resources/img/cartas/${valor}_de_${simbolo}.png`;
    }

    valorNumerico(asCardValue) {
        return valorNum(this, asCardValue);
    }

    get valor() {
        return this._valor;
    }
    get simbolo() {
        return this._simbolo;
    }
    get imagem() {
        return this._imagem;
    }
}

'use strict';
let valorNum = ((carta, asCardValue) => {
    switch (carta.valor) {
        case "dois" : return 2;
        case "tres" : return 3;
        case "quatro" : return 4;
        case "cinco" : return 5;
        case "seis" : return 6;
        case "sete" : return 7;
        case "oito" : return 8;
        case "nove" : return 9;
        case "as" : return asCardValue;
        default : return 10;
    }
})