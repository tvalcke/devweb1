const COURS_ANGLAIS_ECTS = 15;
const COURS_PROGRA_ECTS = 25;
const COURS_INITPC_ECTS = 20;

let matriculeEtudiant;
let aReussi; // boolean
let grade;
let coteAnglais;
let coteProgrammation;
let coteInitPc;
let necessaire = 10;
let test = 10;
matriculeEtudiant = prompt("Entrez le matricule de l'étudiant");

coteAnglais = +prompt("Entrez la cote en anglais");
coteProgrammation = +prompt("Entrez la cote en programmation");
coteInitPc = +prompt("Entrez la cote en init pc");

//calcul de la moyenne arithmétique pondérée
let moyenne = Number(coteAnglais*COURS_ANGLAIS_ECTS + coteProgrammation*COURS_PROGRA_ECTS + coteInitPc*COURS_INITPC_ECTS)/(COURS_ANGLAIS_ECTS+COURS_PROGRA_ECTS+COURS_INITPC_ECTS);
moyenne = moyenne.toFixed(2); // arrondir à 2 décimales

if (moyenne < necessaire){
    aReussi = false;
}
else {
    aReussi = true;

    //Verifier si les cours sont réussis individuellement

    if (coteAnglais>=necessaire){
        if (coteProgrammation>=necessaire){
            if (coteInitPc>=necessaire){
                aReussi = true;
            }
            else {
                aReussi = false;
            }
        }
        else {
            aReussi = false;
        }
    }
    else {
        aReussi = false;
    }
}

// Affichage des résultats

if (aReussi){
    if (moyenne<12){
        console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi sans grade");
    }
    else if (moyenne>=12 && moyenne<14){
        console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec satisfaction");
    }
    else if (moyenne>=14 && moyenne<16){
        console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec distinction");
    }
    else if (moyenne>=16 && moyenne<18){
        console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec grande distinction");
    }
    else if (moyenne>=18 && moyenne<20){
        console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec la plus grande distinction");
    }
    else if (moyenne==20){
        console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec les félicitations du jury");
    }
}

else {
    console.log("Étudiant "+ matriculeEtudiant + ", moyenne : " + moyenne +", a raté, cours : "+ coteAnglais + ", " + coteProgrammation + ", " + coteInitPc)
}
