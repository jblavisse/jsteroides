"use strict";

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

let truc = "";
if(age<18) {
    truc = "Dégage";
}
else {
    truc = "Viens, y a de la pute";
}

let truc = age<18 ? "Dégage" : "Viens, y a de la pute";