function calculerMoyenneCotes() {
    let stop = "99";
    let cote;
    let somme = 0;
    let nbCotes = 0;
    let moyenne = 0;
    let matricule;

    matricule = prompt("Entrez le matricule de l'étudiant");

    while (cote !== stop) {
        cote = prompt("Entrez une cote");

        if (cote === stop) {
            break; // Sortir de la boucle si l'utilisateur entre "99"
        }

        cote = parseFloat(cote);

        if (isNaN(cote) || cote < 0 || cote > 20) {
            console.log("Matricule : " + matricule + " - ABANDON demandé !");
            return; // Terminer la fonction en cas de cote invalide
        }

        nbCotes += 1;
        somme += cote;
    }

    if (nbCotes === 0) {
        console.log("Matricule : " + matricule + " - Pas de cote rentrée");
        return; // Terminer la fonction si aucune cote valide n'a été entrée
    }

    moyenne = somme / nbCotes;
    moyenne = moyenne.toFixed(2); // Arrondir à 1 décimale

    console.log("Matricule : " + matricule + " - Moyenne : " + moyenne);
}

function calculerMoyenneTroisCotes() {
    function demandeNombre(min, max, message) {
        let cote;

        do {
            cote = prompt(message);

            if (cote === null) {
                console.log("Matricule : "+matricule +" - ABANDON demandé !");
                return null; // L'utilisateur a cliqué sur "Annuler", retourne null
            }

            cote = parseFloat(cote);
        } while (isNaN(cote) || cote < min || cote > max);

        return cote;
    }

    let matricule;
    do {
        matricule = prompt("Entrez le matricule de l'étudiant");
        if (matricule === null){
            console.log ("ABANDON immédiat !")
            return null;
        }
    }while (matricule === "");
    

    let cote1 = demandeNombre(0, 20, "Entrez la cote 1");
    if (cote1 === null) {
        return; // Si l'utilisateur abandonne, quitte la fonction
    }

    let cote2 = demandeNombre(0, 20, "Entrez la cote 2");
    if (cote2 === null) {
        return; // Si l'utilisateur abandonne, quitte la fonction
    }

    let cote3 = demandeNombre(0, 20, "Entrez la cote 3");
    if (cote3 === null) {
        return; // Si l'utilisateur abandonne, quitte la fonction
    }

    let moyenne = (cote1 + cote2 + cote3) / 3;

    console.log("Matricule : " + matricule + " - Moyenne : " + moyenne.toFixed(2));
}

function calculerMoyenneNbrCotes(nbrCotes, limiteMin, limiteMax) {
    function demandeNombre(min, max, message) {
        let cote;

        do {
            cote = prompt(message);

            if (cote === null) {
                console.log("Matricule : "+matricule +" - ABANDON demandé !");
                return null; // L'utilisateur a cliqué sur "Annuler", retourne null
            }

            cote = parseFloat(cote);
        } while (isNaN(cote) || cote < min || cote > max);

        return cote;
    }

    let matricule;
    do {
        matricule = prompt("Entrez le matricule de l'étudiant");
        if (matricule === null){
            console.log ("ABANDON immédiat !")
            return null;
        }
    }while (matricule === "");

    let somme = 0;
    let cote;
    for (let i = 1; i <= nbrCotes; i++) {
        cote = demandeNombre(limiteMin, limiteMax, "Entrez la cote " + i);
        if (cote === null) {
            return; // Si l'utilisateur abandonne, quitte la fonction
        }

        somme += cote;
    }

    let moyenne = somme / nbrCotes;

    console.log("Matricule : " + matricule + " - Moyenne : " + moyenne.toFixed(2));
}

function pierrePapierCiseau() {

    function icon(num){
        switch(num){
            case -1: return '❌';
            case 1 : return '💎';
            case 2 : return '🧻';
            case 3 : return '✂️';
            case 5 : return '👀';
            case 6 : return '🤖';
            case 7 : return '🤩';
            case 8 : return '😭';
            case 9 : return '🏆';
            case 99 : return '✋';
            default : return'❓';
        }
    }
    let manchesGagnees = 0;
    let manchesPerdues = 0;
    let manchesEgalite = 0;

    console.log("Bienvenue dans le jeu Pierre, Papier, Ciseaux!");

    while (true) {
        console.log("Choisissez une option :");
        console.log("1 - Pierre");
        console.log("2 - Papier");
        console.log("3 - Ciseaux");
        console.log("99 - Fin");

        const choixUtilisateur = parseInt(prompt("Entrez votre choix :"));

        if (choixUtilisateur === 99) {
            break; // Sortir de la boucle si l'utilisateur choisit "Fin"
        }

        if (choixUtilisateur < 1 || choixUtilisateur > 3 || isNaN(choixUtilisateur)) {
            console.log("Choix invalide. Veuillez choisir 1, 2, ou 3.");
            continue; // Ignorer ce tour de boucle et demander une nouvelle entrée
        }

        // Générer le choix de l'ordinateur (1, 2 ou 3)
        const choixOrdinateur = Math.floor(Math.random() * 3) + 1;

        // Afficher les choix
        console.log("Vous avez choisi : " + icon(choixUtilisateur));
        console.log("L'ordinateur a choisi : " + icon(choixOrdinateur));

        // Déterminer le gagnant de la manche
        if (choixUtilisateur === choixOrdinateur) {
            console.log("Égalité !");
            manchesEgalite++;
        } else if (
            (choixUtilisateur === 1 && choixOrdinateur === 3) ||
            (choixUtilisateur === 2 && choixOrdinateur === 1) ||
            (choixUtilisateur === 3 && choixOrdinateur === 2)
        ) {
            console.log("Vous avez gagné cette manche !");
            manchesGagnees++;
        } else {
            console.log("L'ordinateur a gagné cette manche.");
            manchesPerdues++;
        }
    }

    // Afficher le résultat final
    console.log("Nombre de manches gagnées : " + manchesGagnees);
    console.log("Nombre de manches perdues : " + manchesPerdues);
    console.log("Nombre de manches à égalité : " + manchesEgalite);
    console.log("Merci d'avoir joué !");
}

pierrePapierCiseau();