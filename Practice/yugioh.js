class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    seeStats() {
        console.log("Name:" + this.name, "\n", "Cost:" + this.cost, "\n", "Power:" + this.power, "\n", "Resilience:" + this.resilience);
    }

    attack(target) {
        if(target instanceof Unit) {
            target.resilience -= this.power;
        }
        else {
            throw new Error("Target must be a unit");
        }
    }
}

let rBN = new Unit("Red Belt Ninja", 3, 3, 4);
// rBN.seeStats();
let bBN = new Unit("Black Belt Ninja", 4, 5, 4);
// bBN.seeStats();


class Effect extends Card {
    constructor(name, cost, magnitude, text) {
        super(name, cost);
        this.magnitude = magnitude;
        this.text = text;
        this.isPlayed = false;
    }

    seeEffect() {
        console.log("Name:" + this.name, "\n", "Cost:" + this.cost, "\n", "Magnitude:" + this.magnitude, "\n", "Text:" + this.text);
    }

    playHardAlgo(target) {
        if(target instanceof Unit) {
            target.resilience += 3;
        }
        else {
            throw new Error("Target must be a unit");
        }
    }

    playuPR(target) {
        if(target instanceof Unit) {
            target.resilience -= 2;
        }
        else {
            throw new Error("Target must be a unit");
        }
    }

    playpP(target) {
        if(target instanceof Unit) {
            target.power += 2;
        }
        else {
            throw new Error("Target must be a unit");
        }
    }
}

let hardAlgo = new Effect("Hard Algorithm", 2, 3, "Increase target's resilience by 3");
let uPR = new Effect("Unhandled Promise Rejections", 1, 2, "Reduce targets resilience by 2");
let pP = new Effect("Pair Programming", 3, 2, "Increase target's power by 2");

//****************************************Game Below ************************************/

hardAlgo.playHardAlgo(rBN);
// rBN.seeStats();
uPR.playuPR(bBN);
// bBN.seeStats();
pP.playpP(rBN);
// rBN.seeStats();
rBN.attack(bBN);
bBN.seeStats();
