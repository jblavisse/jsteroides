"use strict";

/* 
Chaque variable créé dans mon programme principal sera accessible
dans toute fonction

Chaque variable ou paramètre qui est dans une fonction appartient
uniquement à elle, et donc ne sera pas accessible dans mon programme principal
(ou autre fonction)
*/

function square(num) {
    /* J'aurai pu mettre nb à la place de num
    Le nb serait devenu une référence locale pour la fonction
    et aurait pris le relais du nb du programme principal 
    */
    let brrr = "coucou";

    // nb créé dans programme principal, et donc accessible
    console.log(nb);

    // brrr créé dans cette fonction donc accessible
    console.log(brrr);

    // num paramètre de la fonction donc accessible
    console.log(`num: ${num}`);
    return num*num;
}


/*
Différence avec let et const
Une fois que j'ai donné une première valeur à une variable déclarée
avec const, et ben je ne peux plus lui modifier sa valeur 
C'est ce que l'on appelle une constante */

const nb = 12;

// Ca ne marchera pas, car const bloque
nb=5;
console.log(`nb vaut ${nb} et son carré ${square(nb)}`);

// brrr créé et appartient uniquement à la fonction, 
// hors là dans programme principal donc brrr non accessible
console.log(brrr);

// pareil pour num
console.log(num);


if(1>0) {
    // let vient créer une variable uniquement pour le bloc
    // dans lequel il est
    let coucou = "tu veux";
}

// is not defined
console.log(coucou);


// Petite recommandation
// Vous allez employer const à chaque fois
// Et dès que vous obtenez un message d'erreur dans la console
// Vous allez transformer le const en let