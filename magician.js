import {Player} from './player.js';

/*
_ Créer une classe Magician qui hérite de Player. Puis créer une méthode spell() 
qui affiche "Foudre!" dans la console
(Bonus Créer une propriété mana pour le magicien.  Chaque sort utilise 10 points de mana.
Si il n'y a plus assez de mana, spell() affiche "Pas assez de mana!")
*/

export default class Magician extends Player {
    spell() {
        console.log("Foudre!");
    }
}