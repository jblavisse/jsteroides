'use strict';

// Fonction constructeur
/*
function Vehicle(model, brand) {
    this.engine = true;
    this.model = model;
    this.brand = brand;

    this.honk = function () {
        console.log("tututttt");
    }
}
*/

// La même chose en classe

class Vehicle {
    engine = true;

    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
    }

    // Klaxonner en français
    honk() {
        console.log("Tututtttttt");
    }
}


let monVehiculeDeOuf = new Vehicle("Mad", "Ford");
console.log(monVehiculeDeOuf);
monVehiculeDeOuf.honk();
// monVehiculeDeOuf.launchWiper() -> ne fonctionne pas car appartient à classe
//  Fille!



// ----- 
// Supposons que j'aimerai plusieurs types de véhicule dans mon code
// Par exemple, je voudrai que l'utilisateur puisse avoir une voiture
// Mais aussi potentiellement une moto

// Hors...
// Une moto est un véhicule
// Une voiture est un véhicule
// Donc, il y a un risque d'une répétition de code.


// Pour éviter ça, on va utiliser ce que l'on appelle l'héritage
// où une classe fille viendra hériter d'une classe mère
// Donc on va pouvoir créer un objet qui récupère l'adn du papa
// Mais aussi une part de son propre ADN


class Car extends Vehicle  {
    nbWheels = 4;

    // wiper -> essuie-glace en français
    launchWiper() {
        console.log("C'est parti pour les essuies-glace");
    }
}


let myCar = new Car("Max", "Mazda");
console.log(myCar);
myCar.honk(); // Hérite d'une classe mère donc fonctionne
myCar.launchWiper();