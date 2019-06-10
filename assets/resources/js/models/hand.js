class Hand {

    constructor(deck) {
        if(deck !== undefined) {
            this.baralho = deck.baralho;
        } else {
            this.deck = new Deck();
            this.baralho = this.deck.baralho;
        }
    }

    proximaCarta() {
        return this.baralho.shift();
    }

    maoInicial() {
        return [this.proximaCarta(), this.proximaCarta()];
    }

}