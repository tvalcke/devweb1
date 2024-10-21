
/* TP 03 - Logique et Programmation */
/**
 * Demande en boucle à l'utilisateur d'introduire une consommation de carburant en litres,
 * soustrait cette consommation de la quantité de carburant initiale (60)
 * et affichage au fur et à mesure la consommation restante à chaque itération
 * puis affichage lorsqu'il n'y a plus de carburant.
 * (Cette fonction ne reçoit aucun paramètre et ne retourne aucun résultat.)
 */
function executerTp03Exemple() {
    let carburant = 60;
    while (carburant > 0) {
      console.log("Il reste " + carburant + " litres de carburant.");
      let consomme = +prompt("Introduisez la quantité de carburant consommée :");
      carburant = carburant - consomme;
    }
    console.log("Fin de boucle. Plus de carburant.");
  }
  
  /**
   * ...
   */

function executerTp03Ex03_2_5_1() {
    let exposant = 0;
    let resultat = 0 ;
    while (resultat < 1000){
        resultat = 4**exposant ;
        if (resultat < 1000) {
            console.log (resultat);
        }
        exposant +=1;
    }
    
  }
  
  /**
   * ...
   */
  function executerTp03Ex03_2_5_2() {
    compteur = 1
    while (compteur <= 100){
        console.log(compteur);
        compteur +=1;
    }
    
  }
  
  /**
   * ...
   */
  function executerTp03Ex03_2_5_4() {
    let compteur = 2;
    let result;
    while (compteur <=10){
        result = (compteur*7);
        console.log (compteur+" x 7 = "+ result);
        compteur +=1;
    }
    
  }
  
  /**
   * ...
   */
  function executerTp03Ex03_2_5_5() {

    let nombreATrouver;
    nombreATrouver = Math.floor(Math.random() * 100);
    let nombre ;

    while (nombre != nombreATrouver){

        nombre = prompt ("Choisis un nb entre 1 et 100");

        if (nombre < nombreATrouver){
            console.log("Trop petit");
        }

        else if (nombre > nombreATrouver){
            console.log("Trop grand");
        }
    }
    
    console.log("C'est le bon");

    }

/////////////////////////////////////////////////////////

function executerTp03Ex04_2_1(){
    for (let i=0 ; i<5 ; i+=1){
        console.log(i)
    }
}

function parcoursNombre(){                 //////////////////////ca va pas ca me soule
    let debutIntervale = parseInt (prompt ("Donnez un nombre qui désigne le début d'un intervale"));
    let finIntervale = parseInt (prompt ("Donnez un nombre qui désigne la fin de cet intervale"));

    let nombreDePairs = 0;
    let nombreDeNombres = 0;
    let nombresNegatifs = 0;
    let sommeDesNombres = 0;
    let moyenneDesNombres = 0;

    while (debutIntervale < finIntervale){
        if (debutIntervale % 2 == 0){
            nombreDePairs +=1;
        }
        debutIntervale+=1;
    }
    console.log (nombreDePairs);
}