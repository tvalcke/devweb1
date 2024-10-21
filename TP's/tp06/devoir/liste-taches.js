let taches= [
    [ "T01", "Aller en guindaille",   "2018-11-20", "top", 1, "", true],
    [ "T02", "Révision cours progra", "2018-11-01", "top", 1, "notamment les boucles et tableaux", true],
    [ "T03", "Regarder des séries",   "2018-11-25", "bof", 3, "plus que 4 saisons !", false],
    [ "T04", "Révision anglais",      "2018-11-05", "top", 1, "", false],
    [ "T05", "Aller à la piscine",    "2018-11-15", "bof", 2, "", true]
  ];

function afficherTaches(){
    if (taches.length===0){
        console.log("--- aucune tâche ---")
    }else{
        console.log(taches);
    }
}

function annulerDerniereTache(){
    if (taches.length===0){
        console.log("Il n'y a aucune tâche pour le moment")
    }else{
        let derniereTache = taches.pop();
        let nom= derniereTache[1];
        let code= derniereTache[0];
        console.log("La tâche --"+nom+"-- avec le code --"+code+"-- a bien été supprimée.")
    } 
}

function tacheVersString(tache) {
    return "La tâche : " + tache[0] + " \"" + tache[1] +
                  "\"\n à finir avant le : " + tache[2] + 
                  "\n d'importance : " + tache[3] +
                  "\n est : " + (tache[6] ? "ouverte" : "fermée") +
                  "\n et il reste : " + tache[4] + " h pour la terminer." +
                  "\n Infos sup : " + (tache[5] ? tache[5] : '-- aucune --') + ".";
}

function afficherTacheUrgente(taches) {
    if (taches.length === 0) {
        console.log("Aucune tâche disponible.");
        return;
    }

    let tacheUrgente = taches[0];
    for (let i = 1; i < taches.length; i++) {
        if (taches[i][3] === "top" && taches[i][2] < tacheUrgente[2]) {
            tacheUrgente = taches[i];
        }
    }
    console.log(tacheVersString(tacheUrgente));
}

function afficherTachesImportance(importance) {
    let chaineTaches = "";
    let tachesTrouvees = false;

    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance) {
            chaineTaches += "<p>" + taches[i][0] + " " + taches[i][1] + " - " + taches[i][3] + "</p>\n";
            tachesTrouvees = true;
        }
    }

    if (tachesTrouvees) {
        console.log(chaineTaches);
    } else{
        console.log("Aucune tâche d'importance : " + importance);
    }
}

function marquerTacheResolue(){
    let code = prompt("Entrez le code de la tâche à cloturer");
    if (code === null) {
        console.log("Abandon demandé" !);
        return;
    }else if (code === "") {
        console.log("Pas de code transmis !");
        return;
    }else{
        let tacheTrouvee = false;
        for (let i = 0; i < taches.length; i++) {
            if (taches[i][0] === code) {
                tacheTrouvee = true;
                if (taches[i][6] === false) {
                    console.log("La tâche (" + taches[i][1] + ") avec le code (" + taches[i][0] + ") a déjà été fermée précédemment.");
                } else {
                    taches[i][6] = false;
                    console.log("La tâche (" + taches[i][1] + ") avec le code (" + taches[i][0] + ") a bien été fermée.");
                }
            }
        }
        if (!tacheTrouvee) {
            console.log("Code invalide");
        }
    }
}

function afficherTachesOuvertesImportance(importance) {
    let chaineTaches = "";
    let tachesTrouvees = false;

    for (let i = 0; i < taches.length; i++) {
        if (taches[i][3] === importance && taches[i][6] === true) {
            chaineTaches += "<p>" + taches[i][0] + " " + taches[i][1] + " - " + taches[i][3] + "</p>\n";
            tachesTrouvees = true;
        }
    }

    if (tachesTrouvees) {
        console.log(chaineTaches);
    } else{
        console.log("Aucune tâche ouverte d'importance : " + importance);
    }
}


/*Ecrivez la fonction « afficherDureeTachesOuvertes() » qui calcule la durée totale de toutes les tâches ouvertes.

Il faut d'abord initialiser dans la fonction une variable qui va servir à comptabiliser le nombre d'heures.
Ensuite, parcourir toutes les tâches enregistrées. S'il s'agit d'une tâche "ouverte", alors on ajoute sa durée au total des durées.
Enfin, afficher un message : "Vous en avez encore pour (durée totale) heures de tâches à effectuer !"
La durée totale dans le message doit afficher deux chiffres après la virgule.
Si le nombre d'heure dépasse 50.00, affichez également : "Courage !"*/

function afficherDureeTachesOuvertes(){
    let totalHeures = 0;
    for (let i = 0; i < taches.length; i++) {
        if (taches[i][6] === true) {
            totalHeures += taches[i][4];
        }
    }
    console.log("Vous en avez encore pour " + totalHeures + " heures de tâches à effectuer !");
    if (totalHeures > 50) {
        console.log("Courage !");
    }
}
