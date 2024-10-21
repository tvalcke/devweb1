let demandelongueur= "Quelle est la longueur du recangle?";
let demandelargeur= "Quelle est la largeur du recangle?";

let longueur = +prompt (demandelongueur);
let largeur = +prompt (demandelargeur);
largeur = Number (largeur);
longueur = Number (longueur);

let aire = largeur*longueur;

let message = ("L'aire du rectangle est de "+ aire );

console.log(message);
console.log (longueur);
