const COURS_ANGLAIS_ECTS = 15;
const COURS_PROGRA_ECTS = 25;
const COURS_INITPC_ECTS = 20;
const REUSSITE_COURS = 10;
const REUSSITE_MOYENNE = 10;
let matriculeEtudiant= prompt("Entrez le matricule de l'étudiant :");
let aReussi; // boolean
let grade;

let coteAnglais = +prompt("Entrez la cote en anglais");
let coteProgrammation = +prompt("Entrez la cote en programmation");
let coteInitPc = +prompt("Entrez la cote en init pc");

let moyennePonderee = (coteAnglais * COURS_ANGLAIS_ECTS + coteProgrammation * COURS_PROGRA_ECTS + coteInitPc * COURS_INITPC_ECTS) /
  (COURS_ANGLAIS_ECTS + COURS_PROGRA_ECTS + COURS_INITPC_ECTS);

if (moyennePonderee < REUSSITE_MOYENNE || coteAnglais<REUSSITE_COURS || coteProgrammation<REUSSITE_COURS || coteInitPc<REUSSITE_COURS || isNaN(moyennePonderee)) {
    console.log("Étudiant " + matriculeEtudiant +", moyenne : "  + moyennePonderee.toFixed(2) + ", a raté, cours : " +coteAnglais+", "+coteProgrammation+", "+coteInitPc);
}
else if (moyennePonderee == 20) {
    console.log("Étudiant " + matriculeEtudiant +", moyenne : "  + moyennePonderee.toFixed(2) + ", a réussi avec " + "les félicitations du jury" );
  } 
else if (moyennePonderee >= 18) {
    console.log("Étudiant " + matriculeEtudiant +", moyenne : " +moyennePonderee.toFixed(2) + ", a réussi avec " + "la plus grande distinction" );
  } 
else if (moyennePonderee >= 16) {
  console.log("Étudiant " + matriculeEtudiant +", moyenne : " +moyennePonderee.toFixed(2) + ", a réussi avec " + "grande distinction" );
  }
else if (moyennePonderee >= 14) {
   console.log("Étudiant " + matriculeEtudiant +", moyenne : " +moyennePonderee.toFixed(2) + ", a réussi avec " + "distinction" );
  }
else if (moyennePonderee >= 12) {
   console.log("Étudiant " + matriculeEtudiant +", moyenne : " +moyennePonderee.toFixed(2) + ", a réussi avec " + "satisfaction" );
} 
else { (moyennePonderee >= REUSSITE_COURS);
    console.log("Étudiant " + matriculeEtudiant +", moyenne : " +moyennePonderee.toFixed(2) +", a réussi sans grade"); // +coteAnglais+", "+coteProgrammation+", "+coteInitPc);
}
