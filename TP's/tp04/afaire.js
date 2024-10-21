function saluer(){
    let nom = prompt("quel est ton nom");
    console.log("Salut "+nom);
}

function aireRectangle(){
    let longueur = prompt("Quelle est la longueur du rectangle ?");
    let largeur = prompt ("Quelle est la largeur du rectangle ?");
    let aire = longueur*largeur;
    console.log ("L'aire du rectangle est de "+aire);
}

let compteurLikes = 0;
let compteurDislikes = 0;

function like(compteurLikes){
    compteurLikes +=1;
}

function dislike(compteurDislikes){
    compteurDislikes +=1;
}

function results(compteurLikes,compteurDislikes){
    if (compteurLikes > compteurDislikes) {
        console.log(compteurLikes + " personne(s) aime(nt)");
    } else {
        console.log(compteurDislikes + " personne(s) n'aim(ent) pas");
    }
}

function reset(compteurLikes,compteurDislikes){
    compteurLikes = 0;
    compteurDislikes = 0;
            
    console.log("Les compteurs ont étés remis à zéro")
}

function nettoyageDeChaine2 (){
    let chaineInitiale = `A@ l@@a m@@ate@@rni@té u@@n@ nou@@veau@@@ @pè@re,
    @@in@@qu@iet@@, @@@dem@@@an@de@ à@ l@@a@@ @s@@a@@g@@@e-@@@@@@@@@@fe@@@@mme:@-
    Tr@@ou@@@@@@@@vez@@@-vou@s @@qu@@@e @@mon @@@fi@l@s m@e @@r@@es@@se@@mb@@le@
    ?@ -@ @O@u@i@,@ @m@a@i@s@ @ce n@'@e@s@t@ @p@@@as @@@@gr@@a@@v@e,
    l@'e@ss@e@n@t@i@e@l@ @c@'e@st@@ q@@u'i@l@ s@@@oi@@@t e@n@
    b@@on@@n@@e@@ @@sa@@@nt@@é @!@`;
    let chaineFinale = "";

    for (let i = 0; i < chaineInitiale.length; i++) {
        if (chaineInitiale[i] != "@") {
            chaineFinale += chaineInitiale[i];
        }
    }
    console.log(chaineFinale);
}
/*
let tableau = [7, 6, 5, 4, 3];
console.log( tableau[3] );
console.log( tableau[3] - 2 );
console.log( tableau[3 - 2] );
console.log( tableau[3 - 2] - 1 );
console.log( tableau[tableau.length - 1] );
console.log( tableau[tableau[3] - 1] );
console.log( tableau[tableau.length] );*/

let tableau = ["start", 15, 13.2, true, "false"];
console.log( tableau.push(1) );
console.log( tableau );
console.log( tableau.push("tata", "titi") );
console.log( tableau );
console.log( tableau.pop() );
console.log( tableau );
console.log( tableau.shift() );
console.log( tableau );
console.log( tableau.unshift("toto", "tutu") );
console.log( tableau );
console.log( tableau + ["#WHAT?"] ); //attention

let lotto = [1, 3, 6, 12, 34, 42];
// TODO pour gagner il faut remplacer le 2ème élément par un 5
// TODO et le dernier par 36 !
lotto[1]=5;
lotto[5]=36;
console.log(lotto);

let bac = ["jup", "jup", "orv", "cant"];
let frigo = ["orv", "chim"];
// TODO enlevez le dernier élément de bac et le mettez-le à la fin de frigo !
// TODO Doit fonctionner de manière générique, ne pas "hardcoder de valeur" !
let aAjouter = bac.pop();
frigo.push(aAjouter);
console.log(bac);
console.log(frigo);

function supprimerTroisDerniers(tableau) {
    // TODO cette fonction doit supprimer les 3 derniers éléments de tableau
    let compteur = 0;
    while (compteur < 3){
        tableau.pop();
        compteur+=1;
    }
    return tableau;
}

let survivors = ["1TM1", "1TM2", "1TL1", "1TL2"];
console.log( supprimerTroisDerniers(survivors) );
    

let scores = [4444, 3333, 5555, 1111, 9999, 7777, 8888];
let gagnant = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i]>gagnant){
        gagnant = scores[i];
    }
}

let moyenne = 0;
compteurMoyenne = 0;
compteur = 0;
for (let i = 0; i < scores.length; i++) {
    moyenne += scores[i];
    compteurMoyenne += 1;
    if (scores[i]<7777){
        compteur += 1;
    }
}
moyenne = moyenne/compteurMoyenne;

console.log(moyenne + " " + compteur);
