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

var ninja1 = new Ninja("Patrick", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();