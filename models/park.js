const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticket_price = ticketPrice;
    this.dinosaurs = [
        dino1 = {species: 'T-Rex',
        diet: 'carnivore',
        guestsAttractedPerDay: 200
        },
        dino2 = {
        species: 'Dilophosaurus',
        diet: 'carnivore',
        guestsAttractedPerDay: 80
        },
        dino3 = {
        species: 'Diplodicus',
        diet: 'herbivore',
        guestsAttractedPerDay: 150
        }
    ]
};


Park.prototype.dinoCollection = function () {
    return this.dinosaurs;
    }

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
    }

Park.prototype.removeDino = function (dinosaur) {
    this.dinosaurs.pop(dinosaur);
}



module.exports = Park;