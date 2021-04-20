
/*
Créer une classe Player
Cette classe a une propriété nbLifes que l'utilisateur doit préciser 
et une propriété pseudo
Ajouter une méthode hello à cette classe, 
et qui affiche "Bonjour, je suis pseudo et j'ai x vies"
*/

export class Player {
    constructor(nbLifes, pseudo) {
        this.nbLifes = nbLifes;
        this.pseudo = pseudo;
    }

    hello() {
        console.log(`Bonjour, je suis ${this.pseudo} et j'ai ${this.nbLifes} vies`);
    }
}

// let johndoe = new Player(10, "John Doe");
// johndoe.hello();

