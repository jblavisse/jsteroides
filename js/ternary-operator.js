
let age=12;

// Version longue
if(age<18) {
    alert("Pas majeur!");
}
else {
    alert("Majeur!");
}

// Version raccourcie
// condition ? exprSiVrai : exprSiFaux 
age<18 ? alert("Pas majeur!") : alert("Majeur");

// -----

// let truc = "";
// if(age<18) {
//     truc = "Dégage";
// }
// else {
//     truc = "Viens, y a de la meuf";
// }

let truc = age<18 ? "Dégage" : "Viens, y a de la meuf";


/* 
Checker si un nombre est pair ou impair (on affiche juste "pair" ou "impair" 
selon la valeur d'un nombre dans une variable)
*/
let nb = 12;
nb%2 === 0 ? alert("Pair") : alert("impair");

/*
Checker si un élève a la moyenne sur une note (si c'est supérieur à 10, 
on lui dit que c'est un BG. Sinon qu'il doit travailler plus)
*/

let mark = 11;
let msg = mark >= 10 ? "T'es un BG": "Bosse fainéant";
console.log(msg);