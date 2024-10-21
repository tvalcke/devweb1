let taches= [
    [ "T01", "Aller en guindaille",   "2018-11-20", "top", 1, "", true],
    [ "T02", "Révision cours progra", "2018-11-01", "top", 1, "notamment les boucles et tableaux", true],
    [ "T03", "Regarder des séries",   "2018-11-25", "bof", 3, "plus que 4 saisons !", false],
    [ "T04", "Révision anglais",      "2015-11-05", "top", 1, "", true],
    [ "T05", "Aller à la piscine",    "2017-11-15", "bof", 50, "", true]
  ];

function afficherTaches() {          //Ok ça roule ma poule
let message = document.getElementById('affichageMessage');
if (taches.length === 0) {
    message.textContent = "--- aucune tâche ---";
} else {
    let chaineTaches = "";
    for (let i = 0; i < taches.length; i++) {
        chaineTaches += "<p>" + taches[i][0] + " " + taches[i][1] + " - " + taches[i][2] + " - " + taches[i][3] + " - " + taches[i][4] + " - " + taches[i][5] + " - " + taches[i][6] + "</p>\n";
    }
    document.getElementById('tachesAffichage').innerHTML = chaineTaches; // Message de confirmation
}
}

function annulerDerniereTache() {          //Ok ça roule ma poule
    if (taches.length === 0) {
        afficherResultats('tachesAffichage', "Aucune tâche pour le moment");
    } else {
        let derniereTache = taches.pop();
        let nom = derniereTache[1];
        let code = derniereTache[0];
        afficherResultats('tachesAffichage', "La tâche --" + nom + "-- avec le code --" + code + "-- a bien été supprimée.");
    }
}

function tacheVersString(tache) {          //Ok ça roule ma poule
    return "La tâche : " + tache[0] + " \"" + tache[1] +
                  "\"\n à finir avant le : " + tache[2] + 
                  "\n d'importance : " + tache[3] +
                  "\n est : " + (tache[6] ? "ouverte" : "fermée") +
                  "\n et il reste : " + tache[4] + " h pour la terminer." +
                  "\n Infos sup : " + (tache[5] ? tache[5] : '-- aucune --') + ".";
}

function afficherTacheUrgente() {          //Ok ça roule ma poule
    if (taches.length === 0) {
        afficherResultats('tachesAffichage', "Aucune tâche disponible.");
        return;
    }

    let tacheUrgente = null;
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][6]) { // Vérification si la tâche est ouverte
            let dateTache = new Date(taches[i][2]);

            if (!tacheUrgente || dateTache < new Date(tacheUrgente[2])) {
                tacheUrgente = taches[i];
            }
        }
    }

    if (tacheUrgente) {
        afficherResultats('tachesAffichage', tacheVersString(tacheUrgente));
    } else {
        afficherResultats('tachesAffichage', "Aucune tâche ouverte disponible.");
    }
}

function afficherTachesImportance() {          //Ok ça roule ma poule
    var importance = document.getElementById("choixImportance").value;
    let chaineTaches = "";
    let tachesTrouvees = false;

    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance) {
            chaineTaches += "<p>" + taches[i][0] + " " + taches[i][1] + " - " + taches[i][3] + "</p>\n";
            tachesTrouvees = true;
        }
    }

    if (tachesTrouvees) {
        afficherResultats('tachesAffichage', chaineTaches);
    } else {
        afficherResultats('tachesAffichage', "Aucune tâche d'importance : " + importance);
    }
}

function marquerTacheResolue(){          //Ok ça roule ma poule
    let code = document.getElementById('codeTacheResolue').value;

    let tacheTrouvee = false;
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][0] === code) {
            tacheTrouvee = true;
            if (taches[i][6] === false) {
                afficherResultats('tachesAffichage', "La tâche (" + taches[i][1] + ") avec le code (" + taches[i][0] + ") a déjà été fermée précédemment.");
            } else {
                taches[i][6] = false;
                afficherResultats('tachesAffichage', "La tâche (" + taches[i][1] + ") avec le code (" + taches[i][0] + ") a bien été fermée.");
            }
        }
        
    if (!tacheTrouvee) {
        afficherResultats('tachesAffichage', "Code invalide");
    }
    }
}

function afficherTachesOuvertesImportance() {          //Ok ça roule ma poule
    let importance = document.getElementById("ouvertesChoixImportance").value;
    let chaineTaches = "";
    let tachesTrouvees = false;

    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance && taches[i][6] === true) {
            chaineTaches += "<p>" + taches[i][0] + " " + taches[i][1] + " - " + taches[i][3] + "</p>\n";
            tachesTrouvees = true;
        }
    }

    if (tachesTrouvees) {
        afficherResultats('tachesAffichage', chaineTaches);
    } else {
        afficherResultats('tachesAffichage', "Aucune tâche ouverte d'importance : " + importance);
    }
}

function afficherDureeTachesOuvertes(){          //Ok ça roule ma poule
    let totalHeures = 0;
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][6] === true) {
            totalHeures += taches[i][4];
        }
    }
    afficherResultats('tachesAffichage', "Vous en avez encore pour " + totalHeures + " heures de tâches à effectuer.");
    if (totalHeures > 50) {
        afficherResultats('tachesAffichage', "Vous en avez encore pour " + totalHeures + " heures de tâches à effectuer, courage !");
    }
}

function ajouterTache(formulaire) {          //ENFIN CA FONCTIONNE
    // Récupérer les valeurs du formulaire
    let nom = formulaire.nom.value;
    let limite = formulaire.limite.value;
    let importance = formulaire.importance.value;
    let duree = parseFloat(formulaire.duree.value);
    let description = formulaire.description.value;
  
    let code = "T" + (taches.length + 1).toString().padStart(2, "0");
    taches.push([code, nom, limite, importance, duree, description, true]);
    
    afficherResultats('tachesAffichage', "La tâche --" + nom + "-- avec le code --" + code + "-- a bien été ajoutée.");
    return false;
}

function afficherResultats(elementId, contenu) {          //Ok ça roule ma poule
    let element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = contenu;
    } else {
        console.error("L'élément avec l'ID fourni est introuvable.");
    }
}