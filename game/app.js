"use strict";

import {createGame, removePoint} from './game.js';

/*
Créer un fichier app.js qui lance une partie et 
fait perdre 2 points au joueur 1 et 1 au joueur 2
*/

createGame();

removePoint(1); // Va enlever 1 point au joueur 1
removePoint(1); // Va enlever 1 point au joueur 1
removePoint(2); // Va enlever 1 point au joueur 2
