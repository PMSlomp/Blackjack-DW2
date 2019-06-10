'use strict';
(function() {

    let asCardValue = 11;
    let value = function() {
        do {
            asCardValue = parseInt(prompt(`Digite qual você quer que seja o valor do ÀS
            - 1;
            - 10;
            - 11.`));
        } while(!(asCardValue == 1 || asCardValue == 10 || asCardValue == 11));
    };

    let jogador = 'Jogador';

    document.addEventListener('onload', value());
    let nome = function() {
        jogador = prompt('Digite seu nome');
        if(jogador != null) {
            alert(`Bem vindo ${jogador}`);
        } else {
            alert('Bem vindo');
        }

        return jogador;
    };

    nome();
    let int = new Interface(asCardValue, jogador);

    let nextCardButton = $('botao-nova-carta');
    nextCardButton.addEventListener('click', function() {
        event.preventDefault();

        int.game.novaCartaJogador();
        int.nextCard(int._gamerHand, 'jog', int._gamerScore, int.gamerValue);

        if(int.gamerValue > 21 || int._gamerHand.length > 5) {
            winner();
        }
    });
    nextCardButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#7fff00';
        this.style.color = '#000000';
    });
    nextCardButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#0a720a';
        this.style.color = '#FFFFFF';
    });


    let stopButton = $('botao-parar');
    stopButton.addEventListener('click', function() {
        event.preventDefault();
        let repeticion = (int.tableValue <= int._gamerValue);

        int.positionSelector = 2;

        while(repeticion) {
            repeticion = int.nextCard(int.tableHand, 'mesa', int.tableScore, int.tableValue);
        }

        if(int.tableValue >= int.gamerValue || int.tableHand > 5) {
            winner();
        }
    });
    stopButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#7fff00';
        this.style.color = '#000000';
    });
    stopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#0a720a';
        this.style.color = '#FFFFFF';
    });


    let newGameButton = $('botao-novo-jogo');
    newGameButton.addEventListener('click', function() {
        $('tela-preta').hidden = false;

        let re = function() {
            window.location.reload();
        };

        setTimeout(re,3000);
    });
    newGameButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#7fff00';
        this.style.color = '#000000';
    });
    newGameButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#0a720a';
        this.style.color = '#FFFFFF';
    });

    let opinion = $('botao-opiniao');
    opinion.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#7fff00';
        this.style.color = '#000000';
    });
    opinion.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#0a720a';
        this.style.color = '#FFFFFF';
    });

    let winner = function() {
        int.winner();
    };

})();

