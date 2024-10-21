let demandePrixHtva = "Quel est le prix hors TVA de l'article?";
let demandeTva = "Quel est la TVA de l'article? (0.XX)";
let prixHtva = prompt(demandePrixHtva);
// ou : let prixHtva = Number(prompt(demandePrixHtva));
let tva = prompt(demandeTva);
prixHtva = Number(prixHtva);
tva = Number(tva);
let prixTvac = prixHtva + ( prixHtva * tva );
// ou : let prixTvac = prixHtva * ( 1 + tva )
let message = "Le prix est de l'article avec TVA (" + (tva * 100) + "%) : " + prixTvac.toFixed(2) + " €";
console.log(message);
