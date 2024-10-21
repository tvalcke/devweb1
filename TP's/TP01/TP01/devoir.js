let coursAnglaisEcts = 15;
let coursProgrammationEcts = 25;
let coursInitPcEcts = 20;
let matriculeEtudiant;
let coteAnglais;
let coteProgrammation;
let coteInitPc;

matriculeEtudiant = prompt ("Quel est votre matricule ?");

coteAnglais = prompt ("Quelle est votre note en anglais ?");
coteProgrammation = prompt ("Quelle est votre note en programmation ?");
coteInitPc = prompt ("Quelle est votre note en init pc ?");

coteAnglais = Number (coteAnglais);
coteProgrammation = Number (coteProgrammation);
coteInitPc = Number (coteInitPc);

let moyenne = Math.pow (coteAnglais * coteProgrammation * coteInitPc, 1/3)
console.log ("L'étudiant "+matriculeEtudiant+" a obtenu la moyenne de "+moyenne)