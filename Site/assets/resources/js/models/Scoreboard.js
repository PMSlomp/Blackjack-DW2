var Scoreboard = function(jogador) {

    this.gamer = gamerScore();
    this.table = tableScore();
    gamerJoin(jogador);
};

let gamerScore = function() {
    let gamerScore = document.getElementsByName('pont-jog-td')[0];
    return gamerScore;
};

let tableScore = function() {
    let tableScore = $('pont-mesa-td');
    return tableScore;
};

let gamerJoin = function (jogador) {

    let letra = jogador.charAt(0);
    let letraMai = letra.toUpperCase();
    let jog = jogador.replace(letra, letraMai);

    if(jogador.length > 7) {
        jog = jogador.substring(0, 7);
    }

    $("nome-jogador-td").textContent = jog;
};
