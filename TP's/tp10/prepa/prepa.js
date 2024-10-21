let personnes2 = [
    {nom: 'Camus', prenom:'Albert', sexe: 'm'},
    {nom: 'de Beauvoir', prenom:'Simone', sexe: 'f'},
    {nom: 'Sartre', prenom:'Jean-Paul', sexe: 'm'},
    {nom: 'Dolto', prenom:'Françoise', sexe: 'f'},
    {nom: 'Aron', prenom:'Raymond', sexe: 'm'}
];

let personnes3 = [
    {nom: 'Camus', prenom:'Albert', sexe: 'm'},
    {prenom:'Simone', nom: 'de Beauvoir', sexe: 'f'},
    {sexe: 'm', nom: 'Sartre', prenom:'Jean-Paul'},
    {nom: 'Dolto', sexe: 'f', prenom:'Françoise'},
    {nom: 'Aron', prenom:'Raymond', sexe: 'm'}
    ]; 

let titre=true;

function init(){
    makeTable3Bis('tab', personnes2, titre);

} 

function makeTable3Bis(id, t, titre){
    if (titre){
        makeTitre(id, t);
    }
    // fabrique la table d'identifiant id avec le tableau t
    let s = '';
    let pers = {}; // une personne
    for(let p in t){ // pour chaque personne p dans t
        pers = t[p]; // c'est un objet personne (on mémo la référence)
        s += '<tr>'; // début de nouvelle ligne
        for(let i in pers){ // pour chaque information de la personne
            s += '<td>' + pers[i] + '</td>'; // une case
        }
        s += '</tr>'; // fin de ligne
    }
    document.getElementById(id).innerHTML = s; // Modifier le contenu de la balise tbody
}

function  makeTitre(id, tb){
    let s='';
    s+='<tr>'
    for (let i in tb[0]){
        s+='<th>'+i+'</th>'
    }
    s+='<tr>'
    document.getElementById(id).innerHTML = s;
}

/////////////////////////////////////////////////////////////////////////////

let personnes = [
    {nom: 'moi', sexe: 'm', age: 33},
    {nom: 'toi', sexe: 'f', age: 22},
    {nom: 'lui', sexe: 'm', age: 18},
    {nom: 'elle', sexe: 'f', age: 29},
    {nom: 'eve', sexe: 'f', age: 31},
    {nom: 'adam', sexe: 'm', age: 40},
    {nom: 'cain', sexe: 'm', age: 29},
    {nom: 'abel', sexe: 'm', age: 26}
    ]; 

function afficherPlusDe25(t) {
    let tab = [];
    for (let p of t) {
        if (p.age > 25) {
            tab.push(p);
        }
    }
    console.log(tab);
}

function afficherFemmesMoins25(t){
    let tab=[];
    for(let p of t){
        if (p.sexe == 'f' && p.age<25 ){
            tab.push(p);
        }
    }
    console.log(tab);
}

function combienHF(t){
    let hommes = 0;
    let femmes = 0;
    for (let p of t){
        if (p.sexe == 'm'){
        hommes+=1;
        }else{
            femmes+=1;
        }
    }
    console.log("Il y a  " + hommes +" hommes et "+ femmes+" femmes");
}

function triAlphabetique(t) {
    let i, j, temp;
    for (i = 0; i < t.length - 1; i++) {
        for (j = i + 1; j < t.length; j++) {
            if (t[i].nom.toUpperCase() > t[j].nom.toUpperCase()) {
                temp = t[i];
                t[i] = t[j];
                t[j] = temp;
            }
        }
    }
    console.log(t);
}


afficherPlusDe25(personnes);
afficherFemmesMoins25(personnes);
combienHF(personnes);
triAlphabetique(personnes);

/////////////////////////////////////////////////////////

let personnesEncore = [
    {nom: 'moi', sexe: 'm', age: 33, adr : {code: 1000, ville: 'BXL'}},
    {nom: 'toi', sexe: 'f', age: 22, adr : {code: 1348, ville: 'LLN'}},
    {nom: 'lui', sexe: 'm', age: 18, adr : {code: 1300, ville: 'Wavre'}},
    {nom: 'elle', sexe: 'f', age: 29, adr : {code: 1000, ville: 'BXL'}},
    {nom: 'eve', sexe: 'f', age: 31, adr : {code: 1348, ville: 'LLN'}},
    {nom: 'adam', sexe: 'm', age: 40, adr : {code: 1348, ville: 'LLN'}},
    {nom: 'cain', sexe: 'm', age: 29, adr : {code: 1000, ville: 'BXL'}},
    {nom: 'abel', sexe: 'm', age: 26, adr : {code: 4000, ville: 'Namur'}}
    ]; 

function habiteLLN (t){
    let nbr = 0;
    for (let p of t){
        if (p.adr.code == '1348'){
            nbr +=1
        }
    }
    let singPlurPers = (nbr>1)? "personnes" : "personnes";
    let singPlurHab = (nbr>1)? "habitent" : "habite";

    console.log(nbr+" "+singPlurPers+" "+ singPlurHab+" à Louvain-La-Neuve");
}

function habiteNamurWavre(t){
    let nbr = 0;
    for (let p of t){
        if(p.adr.ville =='Wavre' || p.adr.ville =='Namur'){
            nbr +=1;
        }
    }
    let singPlurPers = (nbr>1)? "personnes" : "personnes";
    let singPlurHab = (nbr>1)? "habitent" : "habite";

    console.log(nbr+" "+singPlurPers+" "+ singPlurHab+" à Wavre ou Namur");
}

habiteLLN(personnesEncore);
habiteNamurWavre(personnesEncore);