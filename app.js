'use strict';

import Warrior from './warrior.js';
import Magician from './magician.js';

/*
_ Dans app.js
Créer un perso Warrior avec un pseudo rigolo (et de la vie à donf) et un perso Magician avec un pseudo badass (pas beaucoup de vies)
Lancer kick et hello sur le perso Warrior
Lancer spell et hello sur le perso Magician
Chaque classe est dans son propre fichier.  
La création des persos et leurs actions seront faits dans le app.js (modifié) 
*/

let crom = new Warrior(10000, "Crôm");
crom.kick();
crom.hello();

let gandalf = new Magician(10, "Gandalf le grissssss");
gandalf.hello();
gandalf.spell();