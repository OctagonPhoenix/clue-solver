import InfoCard from "./infoCard";

class Player {
    name: string;
    numOfCards: number;
    infoCard: InfoCard;

    constructor() {
        this.name = 'New Player';
        this.numOfCards = 0;
        this.infoCard = new InfoCard();
    }
}

export default Player;