"use strict";

/* 
Créer un fichier game.js avec deux variables et deux fonctions: 
* player1 et player2 -> Des nombres
* createGame qui vient remettre à 10 la valeur de player1 et player2
*removePoint qui enlève 1 point au joueur spécifié 
    (si 1 est précisé en argument, on enlève au joueur 1. 
    Si 2 précisé, on enlève au joueur 2)
*/

let scorePlayer1,scorePlayer2;

export function createGame() {
    scorePlayer1 = 10;
    scorePlayer2 = 10;
    console.log(`Joueur1:${scorePlayer1} et Joueur2:${scorePlayer2}`);
}

export function removePoint(numeroPlayer) {
    if(numeroPlayer === 1) {
        scorePlayer1--;
    }
    else if(numeroPlayer === 2) { 
        scorePlayer2--;
    }
    console.log(`Joueur1:${scorePlayer1} et Joueur2:${scorePlayer2}`);
}


