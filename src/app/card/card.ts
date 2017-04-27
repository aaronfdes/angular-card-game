export class Card {

    public suit: string;
    public rank: string;
    private imgPath: string = "/assets/cards/";
    private cardPath: string;
    private cardName: string;

    constructor(rank: string, suit: string) {
        this.rank = rank;
        this.suit = suit;
        this.cardPath = this.imgPath + this.getFullRank() + "_of_" + this.getFullSuit() + ".png";
        this.cardName = this.getFullRank() + "_of_" + this.getFullSuit();
    }

    public getCardDetails() {
        return this.getFullRank() + " of " + this.getFullSuit();
    }

    public compare(otherCard: Card) {
        if (this.suit < otherCard.suit) {
            return -1;
        } else if (this.suit > otherCard.suit) {
            return 1;
        } else if (this.getRankInt(this.rank) < this.getRankInt(otherCard.rank)) {
            return -1;
        } else if (this.getRankInt(this.rank) > this.getRankInt(otherCard.rank)) {
            return 1;
        } else {
            return 0;
        }
    }

    private getFullRank() {
        switch (this.rank) {
            case 'J':
                return "jack";
            case 'Q':
                return "queen";
            case 'K':
                return "king";
            case 'A':
                return "ace";
            default:
                return this.rank;
        }
    }

    private getFullSuit() {
        switch (this.suit) {
            case 'H':
                return "hearts";
            case 'S':
                return "spades";
            case 'D':
                return "diamonds";
            case 'C':
                return "clubs";
        }
    }

    private getRankInt(rank: string): number {

        switch (rank) {
            case "J":
                return 11;
            case "Q":
                return 12;
            case "K":
                return 13;
            case "A":
                return 14;
            default:
                return Number(rank);
        }
    }
}