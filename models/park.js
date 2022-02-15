const Park = function(name, ticketPrice, dinosaurs, diets = NaN){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
    this.diets = diets;  
}

Park.prototype.add = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function() {
    this.dinosaurs.pop();
}

Park.prototype.findMostPopularDinosaur = function() {
    let popDinosaur = this.dinosaurs[0];
    for (var dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > popDinosaur.guestsAttractedPerDay){
                popDinosaur = dinosaur;    
        } 
    } return popDinosaur.species;
}

Park.prototype.findDinosaurBySpecies = function(species) {
    let foundSpecies = [];
    for(var dinosaur of this.dinosaurs) {
        if (dinosaur.species = species) {
            foundSpecies.push(dinosaur);
    }
    return foundSpecies;
}
}

Park.prototype.calculateTotalVisitors = function() {
    let visitors = 0;
    for(var dinosaur of this.dinosaurs) {
        visitors += dinosaur.guestsAttractedPerDay;
    }
    return visitors;
}

Park.prototype.calculateTotalVisitorsInYear = function(daysOpen = 362) {
    const dailyVisitors = this.calculateTotalVisitors();
    let yearlyVisitors = dailyVisitors * daysOpen;
    return yearlyVisitors;
}

Park.prototype.calculateYearlyRevenue = function() {
    let yearlyVisitors = this.calculateTotalVisitorsInYear();
    yearlyRevenue = yearlyVisitors * this.ticketPrice;
    return yearlyRevenue;
}

Park.prototype.removeDinosaurs = function(dinosaurSpecies) {
    for(var i in this.dinosaurs) {
        if (this.dinosaurs[i].species === dinosaurSpecies) {
            this.dinosaurs.splice(i, 1);
        }}}

module.exports = Park;