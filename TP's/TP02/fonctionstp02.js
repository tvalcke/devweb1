function calculerAireRectangle(longueur, largeur){
    //let longueur = Number (prompt ("Quelle est la longueur?"));
    //et largeur = Number (prompt ("Quelle est la largeur?"));
    let aireRectangle = (longueur*largeur);
    return aireRectangle
}

console.log( calculerAireRectangle(5,4) );

// Exercice 1
function direBonjour() {
    console.log("Bonjour");
    }
    direBonjour();
    
// Exercice 2
function direBonjour(nom) {
    console.log("Bonjour " + nom);
    }
    let client = "Albert"
    direBonjour(client);

// Exercice 3
function direAurevoir(nom, langue) {
    if (langue == "NL") {
    console.log("Tot ziens " + nom);
    }
    else if (langue == "FR") {
    console.log("Au revoir " + nom);
    }
    }
    direAurevoir("Sandra", "NL");

// Exercice 4
function multiplierParDeux(nombre) {
    return nombre * 2;
    }
    function calculer(nombre) {
    return multiplierParDeux(nombre + 3);
    }
    console.log(calculer(1));
    
// Exercice 5
function multiplierParDeux(nombre) {
    return nombre * 2;
    }
    function additionnerTrois(nombre) {
    return nombre + 3;
    }
    let resultat = additionnerTrois(5);
    console.log(resultat);
    console.log(multiplierParDeux(resultat));
    console.log(multiplierParDeux(multiplierParDeux(3)));

// Exercice 6
function genererMessageBonjour(nom) {
    return "Bonjour " + nom;
    }
    let message = genererMessageBonjour("Albert");
    console.log(message);
    console.log(genererMessageBonjour("Sandra"));

// Exercice 7
function genererMessageBonjour(nom) {
    return "Bonjour " + nom;
    }
    genererMessageBonjour("Albert");

// Exercice 8
function genererMessageBonjour(nom) {
    return "Bonjour " + nom;
    console.log("Salut tout le monde !");
    console.log("Tout va bien !");
    }
    console.log(genererMessageBonjour("Albert"));

// Exercice 9
function estMajeur(age) {
    return age >= 18;
    }
    console.log(estMajeur(16));


function afficherTableMultiplication(nombre){
    console.log ("1 x "+nombre+" = "+ nombre*1);
    console.log ("2 x "+nombre+" = "+ nombre*2);
    console.log ("3 x "+nombre+" = "+ nombre*3);
    console.log ("4 x "+nombre+" = "+ nombre*4);
    console.log ("5 x "+nombre+" = "+ nombre*5);
}

afficherTableMultiplication(2);

function afficherTroisTablesMultiplication(nombre1, nombre2, nombre3){
    afficherTableMultiplication(nombre1);
    console.log ("");
    afficherTableMultiplication(nombre2);
    console.log ("");
    afficherTableMultiplication(nombre3);
}

afficherTroisTablesMultiplication(2,3,5);