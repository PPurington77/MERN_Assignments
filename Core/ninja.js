//create ninja class w/ name, health, speed = 3, strength = 3
//add method sayNam()..logs ninjas name to console
// method showStats() show ninjas name, strenght, speed and health
//method drinkSake() add 10 health to ninja

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Ninja Name:" + this.name);
    }

    showStats() {
        console.log("Name:" + this.name, "\n", "Strength:" + this.strength, "\n", "Speed:" + this.speed, "\n", "Health:" + this.health);
    }

    drinkSake() {
        this.health += 10; 
    }
}

var ninja1 = new Ninja("Patrick");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

//create sensai class that extends ninja
//200 health, 10 speead/strength
//new attribute called wisdom = 10
//speak wisdom method...calss drinksake() and logs a message

class Sensai extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.health = 10;
        this.wisdom = 10;
    }

    showTheStats() {
        console.log(this.health, this.strength, this.health, this.wisdom, this.name);
    }

    speakWisdoms() {
        super.drinkSake();
        console.log(this.health);
        console.log("Wise Message");
    }
}

var sensai = new Sensai("Chungus");
// sensai.showTheStats();
sensai.speakWisdoms();

