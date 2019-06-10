class Interface {

    constructor(asCardValue, jogador) {
        this._game = new Game(jogador);

        this._gamerHand = this._game.gamerHand;
        this._tableHand = this._game.tableHand;
        this._positionSelector = 0;

        this._gamerScore = this._game.score.gamer;
        this._tableScore = this._game.score.table;

        this._gamerValue = 0;
        this._tableValue = 0;

        this._asCardValue = asCardValue;

        this.start();
    }

    get game() {
        return this._game;
    }
    get positionSelector() {
        return this._positionSelector;
    }
    set positionSelector(value) {
        this._positionSelector = value;
    }

    get tableHand() {
        return this._tableHand;
    }
    get tableScore() {
        return this._tableScore;
    }
    get tableValue() {
        return this._tableValue;
    }
    get gamerValue() {
        return this._gamerValue;
    }
    get asCardValue() {
        return this._asCardValue;
    }
    set asCardValue(value) {
        this._asCardValue = value;
    }

    start() {
        this._aux = true;
        this.nextCard(this._gamerHand, 'jog', this._gamerScore, this.gamerValue);
        this.nextCard(this._gamerHand, 'jog', this._gamerScore, this.gamerValue);
    }

    nextCard(hand, player, score, value) {

        if((this.positionSelector > 1) && (player === 'mesa')) {
            this.game.novaCartaMesa();
        }

        this._playerPosition =
            document.querySelector(`#carta${this._positionSelector + 1}-${player}`);

        this._playerPosition.src = hand[this._positionSelector].imagem;

        this._playerPosition.hidden = false;

        value = this.carValue(score, hand[this._positionSelector]);

        if((this._positionSelector <= 1) && (this._aux)) {
            this._aux = false;
            this.nextCard(this.tableHand, 'mesa', this.tableScore, this.tableValue);
            this._positionSelector--;
        }

        this._aux = true;
        this._positionSelector++;

        if(player === 'mesa') {
            this._tableValue = value;
            return ((this._tableValue < 20) && (this._tableValue <= this._gamerValue));
        } else {
            this._gamerValue = value;
            return true;
        }
    }

    carValue(player, caminho) {
        player.textContent = parseInt(player.textContent) + 
            caminho.valorNumerico(this.asCardValue);
        return parseInt(player.textContent);
    }

    winner() {
        let cor = ['#ffa500', 'white'];
        let i = 0;

        this._message = document.getElementsByTagName('h2')[0];
        if((this.tableValue > 21 || this.tableValue < this.gamerValue) && (this.gamerValue <= 21)) {
            mensagem.textContent = 'Você ganhou! =)'
        } else {
            this._message.textContent = 'Você perdeu! =/'
        }

        let that = this._message;
        let mudaCor = function() {

            that.style.color = cor[i];

            if(i === 0) {
                i = 1;
            } else {
                i = 0;
            }
        };

        $('botao-nova-carta').remove($('botao-nova-carta'));
        $('botao-parar').remove($('botao-parar'));
        $('botao-novo-jogo').hidden = false;

        setInterval(mudaCor, 700);
    }

}

