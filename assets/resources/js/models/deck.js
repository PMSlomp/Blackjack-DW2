const valores = ["as", "rei", "dama", "valete", "dez", "nove",
"oito", "sete", "seis", "cinco", "quatro", "tres", "dois"];
const simbolos = ["ouro", "copas", "paus", "espadas"];

class Deck {
    
  constructor() {
    this._baralho = [];
    this.criaBaralho();
    this.embaralhar();
  }

  criaBaralho() {
    this._baralho = criacaoDeBaralho(this.baralho);
  };

  embaralhar() {
    embaralharCartas(this.baralho);
  }

  get baralho() {
    return this._baralho;
  }

}


'use strict';
function embaralharCartas(baralho) {
  for (const key in baralho) {
    let mudanca = Math.trunc(Math.random() * baralho.length);
    let aux = baralho[mudanca];
    baralho[mudanca] = baralho[key];
    baralho[key] = aux;
  }
  baralho.reverse();
  //for(let n = 0; n < baralho.length; n++) {
  //  let mudanca = Math.trunc(Math.random() * baralho.length);
  //  let aux = baralho[mudanca];
  //  baralho[mudanca] = baralho[n];
  //  baralho[n] = aux;
}

'use strict';
let criacaoDeBaralho =  function(baralho) {
  for(let v = 0; v < valores.length; v++) {
    for(let s = 0; s < simbolos.length; s++) {
      baralho.push(new Card(valores[v], simbolos[s]));
    }
  }
  return baralho;
}