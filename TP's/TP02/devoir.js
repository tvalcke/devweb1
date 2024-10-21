const COURS_ANGLAIS_ECTS = 15;
const COURS_PROGRA_ECTS = 25;
const COURS_INITPC_ECTS = 20;

let matriculeEtudiant;
let grade;
let coteAnglais;
let coteProgrammation;
let coteInitPc;
let moyenne ;
let test = 10;

function calculerMoyennePonderee(coteAnglais, coteProgrammation, coteInitPc){

    coteAnglais = Number (coteAnglais);
    coteProgrammation = Number (coteProgrammation);
    coteInitPc = Number (coteInitPc);

    moyenne = Number(coteAnglais*COURS_ANGLAIS_ECTS + coteProgrammation*COURS_PROGRA_ECTS + coteInitPc*COURS_INITPC_ECTS)/(COURS_ANGLAIS_ECTS+COURS_PROGRA_ECTS+COURS_INITPC_ECTS);
    return moyenne;

}


function obtenirResultat(matriculeEtudiant, coteAnglais, coteProgrammation, coteInitPc,moyenne){
    let aReussi;
    let necessaire = 10;
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

    if (aReussi){
        if (moyenne<12){
            return ("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi sans grade");
        }
        else if (moyenne>=12 && moyenne<14){
            return("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec satisfaction");
        }
        else if (moyenne>=14 && moyenne<16){
            return("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec distinction");
        }
        else if (moyenne>=16 && moyenne<18){
            return("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec grande distinction");
        }
        else if (moyenne>18 && moyenne<20){
            return("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec la plus grande distinction");
        }
        else if (moyenne==20){
            return("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a réussi avec les félicitations du jury");
        }
    }

    else {
        return("matricule : "+ matriculeEtudiant + ", moyenne : " + moyenne +", a raté, cours : "+ coteAnglais + ", " + coteProgrammation + ", " + coteInitPc)
    }

}

//console.log (obtenirResultat())