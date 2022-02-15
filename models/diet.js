const Diet = function(carnivore, herbivore, omnivore) {
    this.carnivore = carnivore;
    this.herbivore = herbivore;
    this.omnivore = omnivore;
}

Diet.prototype.countDiets = function(dinosaurs) {
    for(dinosaur of dinosaurs) {
        if (dinosaur.diet ==="carnivore") {
            this.carnivore += 1;

        }else if (dinosaur.diet == "herbivore"){
            this.herbivore += 1;
        }else {
            this.omnivore += 1;
        }
    }
}

module.exports = Diet