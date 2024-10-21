/*
var depenses = [12, 15.5, 12342];
for (let i = 0; i < depenses.length; i++) {
    console.log(depenses[i]);
}

// for in

var depenses = [12, 15.5, 12342];
for (let i in depenses) {
    console.log(depenses[i]);
}

// for of

var depenses = [12, 15.5, 12342];
for (let i of depenses) {
    console.log(i);
}
//Ecrivez une boucle pour afficher en console toutes les températures de l'Array ci-dessous supérieures à 25°C :
//avec un for in
var temperatures = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];
for (let i in temperatures) {
    if (temperatures[i] > 25) {
        console.log(temperatures[i]);
    }
}
// avec un for of
var temperatures = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];
for (let i of temperatures) {
    if (i > 25) {
        console.log(i);
    }
}


Utilisez une boucle for of imbriquée dans une boucle for in pour afficher en console la valeur max de chacun des Arrays contenus dans l'Array principal scores.

Vous devez obligatoirement  avoir les deux for (in et of)
Le for in doit servir à parcourir scores
Le for of doit servir à parcourir les Arrays que  contient  scores.
var scores = [
    [12, 15, 13, 10, 8, 9],
    [9, 14, 10, 14, 17],
    [8, 12, 15, 7, 13]
];

if (scores.length ==0) {
    console.log('--scores est vide--')
}else{
    for (let i in scores) {
        let max = 0;
            for (let j of scores[i]) {
                if (j > max) {
                    max = j;
                }
            }
            console.log(max);
    }

}

var voiture = {
    marque : "EleCar",
    kWh : 75,
    couleur : "jaune"
};

console.log(voiture); 
console.log(voiture["kWh"]); 
var m = "marque";
console.log(voiture.m); 
console.log(voiture[m]);
console.log(voiture["m"]); 

var film = {
    titre : "Not another teen movie",
    annee : 2001,
    acteurs : ["Chyler Leigh", "Chris Evans", "Jaime Pressly", "Eric Christian Olsen"]
};
//modifier film pour que la propriété annee ait la valeur 2002
film.annee = 2002;

//ajouter à film la propriété duree avec la valeur 1h29
film.duree = "1h29";

//modifier film pour ajouter Mia Kirshner à la propriété acteurs 
film.acteurs.push("Mia Kirshner");


var acteurs = [  { nom : "Leigh",           prenom : "Chyler" },
                 { nom : "Evans",           prenom : "Chris"  },
                 { nom : "Pressly",         prenom : "Jaime"  },
                 { nom : "Christian Olsen", prenom : "Eric"   }
              ];

console.log(acteurs[2]);
console.log(acteurs[1].nom); 
console.log(acteurs[3]["prenom"]);
console.log(acteurs[2][0]);  
console.log(acteurs[0].nom + " " + acteurs[0].prenom);

for (let acteurs of acteurs) {
    console.log(acteurs.nom + " " + acteurs.prenom);
}

for (let i in acteurs) {
    console.log(acteurs[i].nom + " " + acteurs[i].prenom);
}

var garage = [
    { marque : "EleCar", kWh : 75,  couleur : "jaune" },
    { marque : "EnerSpeed", kWh : 70,  couleur : "rouge" },
    { marque : "Tasle", kWh : 65,  couleur : "jaune" }
];

console.log(garage.length);

//de connaitre la couleur de la dernière voiture inscrite dans le garage
console.log(garage[garage.length - 1].couleur);

//d'afficher les marques et les kWh de toutes les voitures de couleur jaune du garage (boucle) 
for (let voiture of garage) {
    if (voiture.couleur == "jaune") {
        console.log(voiture.marque + " " + voiture.kWh);
    }
}

for (let i in garage) {
    if (garage[i].couleur == "jaune") {
        console.log(garage[i].marque + " " + garage[i].kWh);
    }
}

var voiture = {
    marque : "EleCar",
    couleur : "jaune"
};

//Ecrivez une fonction proprietePresente(obj, prop) qui reçoit en paramètre un objet et une string et qui  retourne "présent" si la string est une propriété de l'objet, et "inconnu" sinon.
function proprietePresente(obj, prop) {
    if (prop in obj) {
        return "présent";
    } else {
        return "inconnu";
    }
}
*/



/*En vous basant sur l'Array  proprietes (boucle), afficher en console tous les couples propriétés et valeurs de l'instance voiture.

L'objet et la variable  proprietes existent déjà. Vous ne devez pas les créer ! 

Vous devez créer 3 fonctions faisant cet affichage :

forClassique() : utilisant avec un for traditionnel
forIn() : utilisant un for in
forOf() : utilisant un  for of 

var voiture = {
    marque : "EleCar",
    kWh : 75,
    couleur : "jaune"
};

function forClassique() {
    for (let i = 0; i < proprietes.length; i++) {
        console.log(proprietes[i] + " - " + voiture[proprietes[i]]);
    }
}
function forIn() {
    for (let i in proprietes) {
        console.log(proprietes[i] + " - " + voiture[proprietes[i]]);
    }
}
function forOf() {
    for (let i of proprietes) {
        console.log(i + " - " + voiture[i]);
    }
}
*/

var aventurier = {
    force : 18,
    intelligence : 6,
    endurance : 10,
    mignon : 12,
    equipement : ["gants de cuir", "casque en mithril", "potion rouge"],
    or : 750
};

/*En utilisant Object.keys(), quel bout de code vous permet d'obtenir le nombre de propriétés d'aventurier :*/
console.log(Object.keys(aventurier).length);

