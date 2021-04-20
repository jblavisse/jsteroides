import {Player} from './player.js';

/*
_ Créer une classe Guerrière (Warrior) qui hérite de Player
Créer une méthode kick() qui affiche "Ouille!" dans la console
*/

// Lorsqu'on a qu'un seul élément à exporter dans un fichier,
// Utiliser default permet d'éviter les {} dans l'import
// Logique vu que une seule chose à importer
export default class Warrior extends Player {
    kick() {
        console.log("Ouille!");
    }
}
