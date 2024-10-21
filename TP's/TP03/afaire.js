
let reponse = "";
while (reponse != "fin") {
reponse = prompt(`Introduisez "fin" pour arrêter la boucle,
ou autre chose pour continuer.`);
}
console.log("Boucle terminée");

let nombre;
let estvalide = false;
while ( !estvalide ) {
nombre = prompt('Introduisez un nombre pair');
if (Number(nombre) % 2 == 0) {
estvalide = true;
}
}
console.log("Fin de boucle. Nombre pair introduit : " + String(nombre));

let carburant = 60;
while (carburant != 0) { // attention !
console.log("Il reste " + carburant + " litres de carburant.");
let consomme = prompt(`Quantité de carburant consommée en L ?`);
carburant = carburant - consomme;
}
console.log("Fin de boucle. Plus de carburant.");