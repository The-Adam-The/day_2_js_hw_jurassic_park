const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      dinosaur = new Dinosaur('t-rex', 'carnivore', 300);
      dinosaurTwo = new Dinosaur('Stegosaurus', 'herbivore', 200);
      dinosaurThree = new Dinosaur('Brontosaurus', 'hervivore', 400)
      dinosaurFour = new Dinosaur('t-rex', 'carnivore', 400)
      dinosaurFive = new Dinosaur('Pterodactyl', 'omnivore', 250)

      park = new Park('Dino World', 100, [dinosaur]);
      parkTwo = new Park('Dino Land', 120, [dinosaur, dinosaurTwo]);
      parkThree = new Park('Dino World Land', 130, [dinosaur, dinosaurTwo, dinosaurThree, dinosaurFour])
      parkFour = new Park('Dino Land World', 135, [dinosaur, dinosaurTwo, dinosaurThree, dinosaurFive]))
    })

  it('should have a name', function() {
    assert.strictEqual(park.name, 'Dino World');
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.ticketPrice, 100);
  });
    

  it('should have a collection of dinosaurs', function() {
    assert.deepStrictEqual(park.dinosaurs,[dinosaur]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add(dinosaurTwo);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur,dinosaurTwo]);

  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.remove();
    assert.deepStrictEqual(park.dinosaurs, []);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function() {
    let popularDinosaur = park.findMostPopularDinosaur();
    assert.strictEqual("t-rex", popularDinosaur);
  });


  it('should be able to find all dinosaurs of a particular species', function() {
    let speciesSearch = park.findDinosaurBySpecies("t-rex");
    assert.deepStrictEqual([dinosaur], speciesSearch);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    let numberVisitors = parkTwo.calculateTotalVisitors();
    assert.strictEqual(500, numberVisitors);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    let yearlyVisitors = parkTwo.calculateTotalVisitorsInYear();
    assert.strictEqual(181000, yearlyVisitors);
  });


  it('should be able to calculate total revenue for one year', function() {
    let revenue =  parkTwo.calculateYearlyRevenue();
    assert.strictEqual(21720000, revenue);
  });

  it('should remove all of the passed in species', function() {
    parkThree.removeDinosaurs("t-rex");
    assert.deepStrictEqual([dinosaurTwo, dinosaurThree], parkThree.dinosaurs)
  })

});
