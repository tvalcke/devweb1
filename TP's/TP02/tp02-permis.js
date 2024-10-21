// Tristan Valcke - TP02 exercice permis
let ageMajorite = 18;
let quartDeSiecle = 25;
let TempsDePermisReference = 2;
let petitAccrochage = 1;
let accrochages = 2;

let ageConducteur = Number (prompt("Quel âge as-tu ?"));
let tempsPermis = Number (prompt("Depuis combien d'années as-tu le permis ?"));
let nombreAccidents = Number (prompt("Combien d'accidents as-tu eu ?"));

if ( ageConducteur < ageMajorite ){
    console.log ("Tu ne peux pas avoir le permis en dessous de 18 ans, tu ne seras pas assuré");
}
if (tempsPermis < 0){
    console.log("Tu ne peux pas avoir un temps de permis négatif, tu ne seras pas assuré");
}

else if ( ageConducteur < quartDeSiecle ){
    if (tempsPermis < TempsDePermisReference ){
        if (  nombreAccidents == 0){
            console.log("tu seras assuré au tarif C");
        }
        else if (nombreAccidents > 0) {
            console.log ("Tu ne seras pas assuré en raison d'un trop grand nombre d'accidents, apprends à rouler");
        }
    }

    else if (tempsPermis > TempsDePermisReference ){
        if (  nombreAccidents == 0){
            console.log ("Tu seras assuré au tarif b");
        }
        else{
            console.log ("Tu seras assuré au tarif c");
        }
    }
}

else if ( ageConducteur >= quartDeSiecle ){
    if (tempsPermis < TempsDePermisReference ){
        if (nombreAccidents == 0) {
            console.log ("Tu seras assuré au tarif b");
        }
        else if (nombreAccidents == petitAccrochage) {
            console.log ("Tu seras assuré au tarif c");
        }
        else if (nombreAccidents > petitAccrochage){
            console.log ("Tu ne seras pas assuré en raison d'un trop grand nombre d'accidents, apprends à rouler");
        }
    }
    else if (tempsPermis >= TempsDePermisReference ){
        if (nombreAccidents == 0) {
            console.log ("Tu seras assuré au tarif a");
        }
        else if (nombreAccidents == petitAccrochage) {
            console.log ("Tu seras assuré au tarif b")
        }
        else if (nombreAccidents == accrochages) {
            console.log ("Tu seras assuré au tarif c");
        }
        else if  (nombreAccidents > accrochages){
            console.log ("Tu ne seras pas assuré en raison d'un trop grand nombre d'accidents, apprends à rouler");
        }
    }
}