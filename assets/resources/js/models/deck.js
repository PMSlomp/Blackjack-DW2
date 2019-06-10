const valores = ['as', 'rei', 'dama', 'valete', 'dez', 'nove',
'oito', 'sete', 'seis', 'cinco', 'quatro', 'tres', 'dois'];
const simbolos = ['ouro', 'copas', 'paus', 'espadas'];

function embaralharCartas(baralho) {
  'use strict';
  for (const key in baralho) {
    let mudanca = Math.trunc(Math.random() * baralho.length);
    let aux = baralho[mudanca];
    baralho[mudanca] = baralho[key];
    baralho[key] = aux;
  }
  baralho.reverse();
}


let criacaoDeBaralho =  function(baralho) {
  'use strict';
  for(let v = 0; v < valores.length; v++) {
    for(let s = 0; s < simbolos.length; s++) {
      baralho.push(new Card(valores[v], simbolos[s]));
    }
  }
  return baralho;
};

class Deck {
    
  constructor() {
    this._baralho = [];
    this.criaBaralho();
    this.embaralhar();
  }

  criaBaralho() {
    this._baralho = criacaoDeBaralho(this.baralho);
  }

  embaralhar() {
    embaralharCartas(this.baralho);
  }

  get baralho() {
    return this._baralho;
  }

}



