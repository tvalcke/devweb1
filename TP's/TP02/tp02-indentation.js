"use strict";
// version if imbriqués

/* *** CONSTANTES *** */
const AGE_CHARNIERE = 25;
const ANCIENNETE_CHARNIERE = 2;
const AGE_MAJORITE = 18;
const MESSAGE_ERREUR = "Erreur : données incorrectes";
const MESSAGE_TARIF = "Tarif : ";

/* *** VARIABLES *** */
let tarif = 'Z'; // Z : pas assuré
let message;
let age;
let anciennete;
let nombreAccidents;

/* *** INPUT *** */
age = +prompt("Age ?");
anciennete = +prompt("Ancienneté ?");
nombreAccidents = +prompt("Nombre accidents ?");

/* *** TRAITEMENT *** */
if ( (age < AGE_MAJORITE) || ( (age - anciennete) < AGE_MAJORITE ) ) {
    message = MESSAGE_ERREUR;
}
else {
    if (age < AGE_CHARNIERE) {
        if (anciennete < ANCIENNETE_CHARNIERE) {
            if (nombreAccidents === 0) {
                tarif = "C";
}
else { // pas nécessaire
    tarif = "Z"; 
}
}
else {
    if (nombreAccidents === 0) {
        tarif = "B";
}
else if (nombreAccidents === 1) {
    tarif = "C";
}
else {
tarif = "Z";
}
}
}
else {
if (anciennete < ANCIENNETE_CHARNIERE) {
if (nombreAccidents === 0) {
tarif = "B";
}
else if (nombreAccidents === 1) {
tarif = "C";
}
else {
tarif = "Z";
}
}
else {
if (nombreAccidents === 0) {
tarif = "A";
}
else if (nombreAccidents === 1) {
tarif = "B";
}
else if (nombreAccidents === 2) {
tarif = "C";
}
else {
tarif = "Z";
}
} 
}
message = MESSAGE_TARIF + tarif;
}

/* *** AFFICHAGE *** */
alert(message);