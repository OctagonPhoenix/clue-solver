import GameComponent from "./gameComponent";

class InfoCard {
    green: GameComponent;
    plum: GameComponent;
    mustard: GameComponent;
    peacock: GameComponent;
    scarlet: GameComponent;
    white: GameComponent;

    candlestick: GameComponent;
    knife: GameComponent;
    leadPipe: GameComponent;
    revolver: GameComponent;
    rope: GameComponent;
    wrench: GameComponent;

    conservatory: GameComponent;
    lounge: GameComponent;
    kitchen: GameComponent;
    library: GameComponent;
    hall: GameComponent;
    study: GameComponent;
    ballroom: GameComponent;
    diningRoom: GameComponent;
    billiardRoom: GameComponent;

    constructor() {
        this.green = new GameComponent("Mr. Green");
        this.plum = new GameComponent("Prof. Plum");
        this.mustard = new GameComponent("Coln. Mustard");
        this.peacock = new GameComponent("Mrs. Peacock");
        this.scarlet = new GameComponent("Miss Scarlet");
        this.white = new GameComponent("Mrs. White");

        this.candlestick = new GameComponent("Candlestick");
        this.knife = new GameComponent("Knife");
        this.leadPipe = new GameComponent("Lead Pipe");
        this.revolver = new GameComponent("Revolver");
        this.rope = new GameComponent("Rope");
        this.wrench = new GameComponent("Wrench");

        this.conservatory = new GameComponent("Conservatory");
        this.lounge = new GameComponent("Lounge");
        this.kitchen = new GameComponent("Kitchen");
        this.library = new GameComponent("Library");
        this.hall = new GameComponent("Hall");
        this.study = new GameComponent("Study");
        this.ballroom = new GameComponent("Ballroom");
        this.diningRoom = new GameComponent("Dining Room");
        this.billiardRoom = new GameComponent("Billiard Room");
    }
}

export default InfoCard;