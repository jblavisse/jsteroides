let marks = [12,7,9,24,3,5,32];

marks.forEach(function(mark) {
    console.log(mark);
})

marks.forEach(mark => console.log(mark));


/* ------ .map */
// marksMultipliedByTwo: copie du premier tableau marks grâce à .map
// .map prend en paramètre une fonction qui va s'exécuter sur chaque valeur
// là ici, chaque valeur sera multiplié par 2 dans la copie du tableau

/*
function(mark) {
    return mark*2;
}
*/

let marksMultipliedByTwo = marks.map(commeTuVeux => commeTuVeux*2);
console.log(marksMultipliedByTwo);

/*
Créer le tableau marksPlusOne dont l'objectif est d'avoir une copie pour
attribuer un point supplémentaire par note dans mon tableau originel
*/

let marksPlusOne = marks.map(mark => mark+1);
console.log(marksPlusOne);



/* ----- .filter */

let marksLessThanTwenty = marks.filter(mark => mark<=20);
console.log(marksLessThanTwenty);

// Créer un tableau marksGreaterThanFive qui ne récupère
// les notes que si elles sont strictement supérieurs à 5

let marksGreaterThanFive = marks.filter(mark => mark>5);
console.log(marksGreaterThanFive);


let marksNew = marks.map(mark => mark+1)
                .filter(mark => mark<=20)
                .filter(mark => mark>5);
console.log(marksNew);