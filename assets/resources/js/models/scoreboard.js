let gamerScore = function() {
    'use strict';
    let gamerScore = document.getElementsByName('pont-jog-td')[0];
    return gamerScore;
};

let tableScore = function() {
    'use strict';
    let tableScore = $id('pont-mesa-td');
    return tableScore;
};

let gamerJoin = function (jogador) {
    'use strict';
    let jog = 'Jogador';

    if(jogador !== '') {
        sessionStorage.setItem('name', jogador);
        let letra = jogador.charAt(0);
        let letraMai = letra.toUpperCase();
        jog = jogador.replace(letra, letraMai);

        if(jogador.length > 7) {
            jog = jogador.substring(0, 7);
        }
    }

    $id('nome-jogador-td').textContent = jog;
};

var Scoreboard = function(jogador) {
    'use strict';
    this.gamer = gamerScore();
    this.table = tableScore();
    gamerJoin(jogador);
};






