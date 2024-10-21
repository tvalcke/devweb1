
let premier = prompt ("Entrez un nombre");
let deuxieme = prompt ("Entrez un deuxième nombre");
let troisieme = prompt ("Entrez un troisième nombre");

if (premier > deuxieme && premier > troisieme) {
    console.log ("Le premier nombre est le plus grand");
}
else if (deuxieme > premier && deuxieme > troisieme) {
    console.log ("Le deuxième nombre est le plus grand");
}
else if (troisieme > premier && troisieme > deuxieme) {
    console.log ("Le troisième nombre est le plus grand");
}
else {
    console.log ("Les nombres sont égaux, veuillez recommencer en réinitialisant la page");
}

let nombreMessages = prompt ("combien de messages avez vous ?")
nombreMessages = Number (nombreMessages)

if (nombreMessages == 1 ) {
    console.log ("Vous avez un nouveau message mon brave")
}
else if (nombreMessages==0 ){
    console.log("Vous n'avez aucun nouveau message, looser ")
}
else if (nombreMessages < 0){
    console.log("Vous ne pouvez pas avoir un nombre de messages négatif petit malin, réactualisez la page pour recommencer !")
}
else {
    console.log("vous avez " + nombreMessages +" nouveau messages, vous êtes super populaire!")
}

// Lecture de code exercice 5.2.3  

/*
let a = 10; let b = 10;
if (a > b) {
console.log("a");
}
else {
console.log("b");
}

let a = 10;
if (a == 11) {
console.log(a);
}
else if (a == 9) {
console.log("rien");
}

// Exercice 3
let a = 10; let b = 20;
if (a > b) {
console.log(a);
}
else if (b >= a) {
console.log(b);
}
else if (a > 5) {
console.log(a + b);
}
else {
console.log("rien");
}

// Exercice 4
let a = 10; let b = 20;
if (a > b) {
console.log(a);
}
else if (b >= a) {
console.log(b);
}
if (a > 5) {
console.log(a + b);
}
else {
console.log("rien");
}

// Exercice 5
let a = 10; let b = 20;
if (a > b) {
console.log(a);
}
else if (b >= a) {
console.log(b);
}
else {
console.log("rien");
}

*/
