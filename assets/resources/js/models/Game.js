class Game {

    constructor(jogador) {
        this._deck = new Deck();
        this._gamer = new Hand(this.deck);
        this._table = new Hand(this.deck);
        this._score = new Scoreboard(jogador);
        
        this.inicio();
    }

    inicio() {
        this._gamerHand = this._gamer.maoInicial();      
        this._tableHand = this._table.maoInicial();
    }

    novaCartaJogador() {
        let card = this._gamerHand.push(this._gamer.proximaCarta());
        return card;
    }

    novaCartaMesa() {
        let card = this._tableHand.push(this._gamer.proximaCarta());
        return card;
    }

    get gamerHand() {
        return this._gamerHand;
    }
    get tableHand() {
        return this._tableHand;
    }
    get deck() {
        return this._deck;
    }
    get score() {
        return this._score;
    }

}
