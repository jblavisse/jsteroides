/* Du code pour le carousel */

// 2. On exporte un ou plusieurs éléments
// Méthode 2, rajouter le mot clé export devant l'élément qu'on veut
// pouvoir récupérer ailleurs
export function displayCarousel() {
    isCarouselVisible ? console.log("coucou") : console.log("je suis cachéééé");
}

export let isCarouselVisible = false;
// Méthode 1 pour exporter une fonction dans un module
//module.exports = {displayCarousel};