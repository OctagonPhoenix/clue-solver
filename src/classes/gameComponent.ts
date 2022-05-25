enum cardStatus {
    unknown,
    inHand,
    notInHand
}

class GameComponent {
    name: string;
    status: cardStatus;

    constructor(name: string) {
        this.name = name;
        this.status = cardStatus.unknown;
    }
}

export default GameComponent;