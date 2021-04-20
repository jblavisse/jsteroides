"use strict";

/* -- Avec des paramètres */
// Fonction classique
function add(a,b) {
    return a+b;
}

// Fonction en anonyme
let add = function(a,b) {
    return a+b;
}

// Fonction fléchée version longue (dans le cas où on a plusieurs
// lignes de code)
let add = (a,b) => {
    return a+b
}

// Fonction fléchée version courte (une seule ligne -> on peut enlever
// le return et les accolades)
let add = (a,b) => a+b;




/* -- Sans paramètres */
function hello() {
    console.log("hello world");
}

let hello = function() {
    console.log("hello world");
}

let hello = () => {
    console.log("Hello world");
}

let hello = () => console.log("hello world");



/* --- Avec un seul paramètre */
function helloToSomeone(name) {
    alert("Bonjour" + name);
}

let helloToSomeone = function(name) {
    alert("Bonjour" + name);
}

let helloToSomeone = (name) => {
    alert("bonjour" + name);
}

let helloToSomeone = name => alert("Bonjour" + name);



// Une fonction classique peut se traduire en fonction fléchée 
// de sorte que:

/*
function quelquechose(param1, param2) {
    return param1-param2;
}

let quelquechose = (param1, param2) => param1-param2;

1. On transforme la fonction en anonyme
2. Puis on remplace le mot clé fonction par une => après les paramètres
3. Pour les paramètres
    a. Si y en a 0 ou plusieurs, alors parenthèses obligatoires
    b. Si un seul paramètre, alors parenthèses optionnelles
4. Pour les instructions dans la fonction
    a. Si une seule ligne, alors on peut enlever les accolades et le mot clé return
    b. Si plusieurs lignes, on laisse les accolades et le mot clé return
*/


/* 
Ecrire une fonction fléchée qui retourne un message si un nombre 
proposé en paramètre est pair ou impair 
("pair" ou "impair")
*/
function getMsgOddOrEven(nb) {
    // version longue
    // if(nb%2 === 0) {
    //     return "pair";
    // }
    // else {
    //     return "impair";
    // }
    return nb%2 === 0 ? "pair" : "impair";
} 

let getMsgOddOrEven = nb => nb%2 === 0 ? "pair" : "impair";
console.log(getMsgOddOrEven(12));

/*
Ecrire une fonction fléchée qui retourne un booléen pour une note donnée
si  c'est supérieur ou égal à 10 -> true, sinon false
*/

function greaterThanTen(mark) {
    // if(mark>=10) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return mark>=10;
}

let greaterThanTen = mark => mark>=10;
console.log(greaterThanTen(-3));