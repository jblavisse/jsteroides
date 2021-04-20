'use strict';

// Créer une classe animal avec une méthode breathe 
//(affiche dans la console "**Respire**")

// PascalCase pour les noms de classe, donc une majuscule pour 
// la 1ère lettre 
class Animal {
    constructor(name) {
        this.name = name;
    }

    breathe() {
        console.log("**Respire**");
    }
}

// Créer une classe Dog qui hérite d'animal + une méthode bark 
// (affiche dans la console "**wouf wouf**)

class Dog extends Animal {
    bark() {
        console.log(this.name + " -> **wouf wouf**");
    }
}

// Créer une classe Cat qui hérite d'animal + une méthode meow 
// (affiche dan s la console "**Miaouuuuu**")

class Cat extends Animal {
    meow() {
        console.log("**Miaouuuuu**");
    }
}

// Instancier un chat et un chien.
// Afficher pour chacun sa respiration et son cri

let myDog = new Dog("Marty");
myDog.breathe();
myDog.bark();

let myCat = new Cat("Mulan");
myCat.breathe();
myCat.meow();