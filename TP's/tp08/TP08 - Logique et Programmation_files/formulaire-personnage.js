"use strict";

/* lvd - august 2017 */

/* ****************** Formulaire pour personnage ************************* */

const NB_JOURS_ANNE = 365;

// initialisation du tableau des personnages à vide
// un personnage est un tableau de cette forme [ nom, sexe, race, age, dateCreation]
var personnages = []; 

/**
 * Ajoute un personnage au array et affiche un message correspondant
 * 
 * @param {object} formulaire Le formulaire contenant les donnée du personnage à ajouter
 * @return {boolean} Renvoie toujours false pour bloquer l'envoi du formulaire
 */
function ajouterPersonnage(formulaire) {
  
  // variables utiles dans la fonction
  var messageSexe;
  var messageRace;
  var nombreJours;
  var message;
  
  
  // enregistrer le personnage dans le tableau
  // [ nom, sexe, race, age, dateCreation]  
  personnages.push( [formulaire.nom.value, formulaire.genre.value,
                      formulaire.race.value, formulaire.age.value, formulaire.creation.value] );
  
  
  // Déterminer le titre et la race dans le message en fonction du sexe
  if ( formulaire.genre.value === "femme" ) {
    messageSexe = "madame" ;
    
    switch(formulaire.race.value) {
      case 'E':
          messageRace = "l'elfe";
          break;
      case 'H':
          messageRace = "l'humaine";
          break;
      case 'N':
          messageRace = "la naine";
          break;
      case 'W':
          messageRace = "la wookiee";
          break;
      default:
          messageRace = "de race inconnue";
    }
  }
  else {
    messageSexe = "monsieur" ;
    
    switch(formulaire.race.value) {      
      case 'E':
          messageRace = "l'elfe";
          break;
      case 'H':
          messageRace = "l'humain";
          break;
      case 'N':
          messageRace = "le nain";
          break;
      case 'W':
          messageRace = "le wookiee";
          break;
      default:
          messageRace = "de race inconnue";
    }
  }
  
  // Déterminer le nombre de jours en fonction de l'âge
  nombreJours = formulaire.age.value * NB_JOURS_ANNE;
  
  // Déterminer le message à afficher
  message = "Bonjour " + messageSexe + " " + formulaire.nom.value +
            " " + messageRace + ", félicitations d'avoir survécu au moins " +
            nombreJours + " jours!";
  
  // Afficher le message de bienvenue  
  document.getElementById("message").innerText = message;
  
  
  // Pour l'instant, on renvoie toujours false
  // Ainsi on est sûr de ne pas envoyer le formulaire (et de ne pas rafraichir la page)
  return false;
}

/**
 * Affiche à l'écran les personnages ajoutés dans le array
 */
function afficherPersonnages() {
  // vide, à définir  
}

/**
 * Supprime du array les personnages ajoutés 
 */
function supprimerPersonnages() {
  // vide, à définir  
}

