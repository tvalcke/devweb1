const NBR_JOCKER   = 3     ; // max 52
const COUPER       = true  ; // true | false : sert de réponse au confirm(...)
const NBR_CARTES   = 2     ; // max 40
const ARRET_URGENT = 2000  ; // max 2000
const NBR = 2;

let jeu = [];      // le jeu de cartes
let joueurA = [];  // le jeu du joueur A
let joueurB = [];  // le jeu du joueur B

function afficheJeu(jeu,texte){
   console.log(texte, jeu);
}

// ne pas toucher aux lignes du dessus
// Bonjour Tristan VALCKE

let nbJoker = 2;

nbJoker = NBR_JOCKER;

function creeJeu (jeu, nbJoker){    // Ok
    jeu.length = 0;
    let couleur = ["♠️","💘️️️","🔶️","♣️"];
    let valeur = ["1","2","3","4","5","6","7","8","9","10","🤴","👸","👑"];
    for (let i = 0; i < couleur.length; i++) {
        for (let j = 0; j < valeur.length; j++) {
            jeu.push(valeur[j] + couleur[i]);
        }
    }
    for (let i = 0; i < nbJoker; i++) {
        jeu.push("🎭");
        
    }
    console.log(jeu);
}

function melangeJeu (jeu,nbr=NBR){    // Ok
    function shuffle (tableau){
        let i = tableau.length;
        let j = 0;
        let temp =[];
        while (i --){ // tant que i est vrai
            j = Math.floor(Math.random() * (i+1));
            temp = tableau[i];
            tableau[i] = tableau[j];
            tableau[j] = temp;
        }
        return tableau;

    }
    for (let i=0 ; i<nbr ; i+=1){
        shuffle(jeu);
    }
    console.log(jeu);
}

function coupeJeu(jeu){    // Ok
    //let coupeOuNon = prompt("Voulez-vous couper le jeu? ( 1 pour oui et 2 pour non)");
    //let coupeOuNon = 1;                                                     // A commenter quand enable du prompt
    //if (coupeOuNon == 1){
    if (COUPER == true){
        let jeuTemporaire = [];
        let random = Math.floor(Math.random()*jeu.length);
        for (let i = jeu.length ; i>random ; i-=1){
            jeuTemporaire.unshift(jeu.pop());
        }
        jeu.unshift(...jeuTemporaire);

    }else{
        console.log("Ok, on ne coupe pas");
    }
    //console.log(jeu);
}

function distribueJeu(jeu, joueurA, joueurB, NBR_CARTES) {  // Fonctionne en local mais pas toujours sur moodle - a voir
    if (NBR_CARTES > 40) {
        console.log("Le nombre de cartes données à la fois est trop élevé.");
        return;
    }

    while (jeu.length >= 2 * NBR_CARTES) {
        for (let i = 0; i < NBR_CARTES; i++) {
            joueurA.push(jeu.pop());
            //joueurB.push(jeu.pop());
        }
        for (let i = 0; i < NBR_CARTES; i++) {
            //joueurA.push(jeu.pop());
            joueurB.push(jeu.pop());
        }
    }

    if (jeu.length > 0) {            // Si le jeu n'est pas vide distribuer les cartes restantes une par une

        //console.log("Cartes restantes dans le jeu : ", jeu);
        //console.log("Distribution des cartes restantes une par une.");

        while (jeu.length > 0) {
            joueurA.push(jeu.pop());
            if (jeu.length > 0) {
                joueurB.push(jeu.pop());
            }
        }
    }

    //console.log("Distribution terminée.");
    console.log("Joueur A : ", joueurA);
    console.log("Joueur B : ", joueurB);
}

function getValeurCarte(carte) {    // Ok
    const valeurCartes = {
        "1♠️": 14, "2♠️": 2, "3♠️": 3, "4♠️": 4, "5♠️": 5, "6♠️": 6, "7♠️": 7, "8♠️": 8, "9♠️": 9, "10♠️": 10, "🤴♠️": 11, "👸♠️": 12, "👑♠️": 13,
        "1💘️️️": 14, "2💘️️️": 2, "3💘️️️": 3, "4💘️️️": 4, "5💘️️️": 5, "6💘️️️": 6, "7💘️️️": 7, "8💘️️️": 8, "9💘️️️": 9, "10💘️️️": 10, "🤴💘️️️": 11, "👸💘️️️": 12, "👑💘️️️": 13,
        "1🔶️": 14, "2🔶️": 2, "3🔶️": 3, "4🔶️": 4, "5🔶️": 5, "6🔶️": 6, "7🔶️": 7, "8🔶️": 8, "9🔶️": 9, "10🔶️": 10, "🤴🔶️": 11, "👸🔶️": 12, "👑🔶️": 13,
        "1♣️": 14, "2♣️": 2, "3♣️": 3, "4♣️": 4, "5♣️": 5, "6♣️": 6, "7♣️": 7, "8♣️": 8, "9♣️": 9, "10♣️": 10, "🤴♣️": 11, "👸♣️": 12, "👑♣️": 13,
        "🎭": 50000 // 50 000 parce que c'est une super méga Joker de la mort qui tue
    };

    return valeurCartes[carte] || 0; // Retourne la valeur de la carte ou 0 si la carte n'est pas trouvée
}

function joueBataille(joueurA, joueurB) {

    for (let i = 0; i <= ARRET_URGENT; i += 1) {
        if (joueurA.length === 0 && joueurB.length === 0) {
            console.log("Match nul !");                       // C'est quand même pas censé arriver mais bon
            break;
        } else if (joueurA.length === 0) {
            console.log("Joueur B gagne la partie !");
            break;
        } else if (joueurB.length === 0) {
            console.log("Joueur A gagne la partie !");
            break;
        }

        let tempA = joueurA.pop();
        let tempB = joueurB.pop();

        const valeurCarteA = getValeurCarte(tempA);
        const valeurCarteB = getValeurCarte(tempB);

        console.log("Joueur A a la carte : ", tempA);
        console.log("Joueur B a la carte : ", tempB);

        if (tempA === tempB) { // Bataille
            console.log("Il y a bataille ! C'est parti mon kiki !");
            // Si il y a bataille, chaque joueur rajoute une carte en jeu 
            tempA = tempA.push(joueurA.pop());
            tempB = tempB.push(joueurB.pop());
            let cartesEnJeu = [tempA, tempB];

            // Continuer à tirer des cartes jusqu'à ce que l'un des joueurs gagne
            while (tempA === tempB) {
                if (joueurA.length < 2 || joueurB.length < 2) {
                    console.log("Pas assez de cartes pour une bataille complète.");
                    break;
                }

                cartesEnJeu.push(joueurA.pop());
                cartesEnJeu.push(joueurB.pop());

                tempA = joueurA.pop();
                tempB = joueurB.pop();

                
                console.log("Joueur A a la carte : ", tempA); ///////////////////////////// ICI
                console.log("Joueur B a la carte : ", tempB);

                cartesEnJeu.push(tempA);
                cartesEnJeu.push(tempB);
            }

            // Comparaison des cartes pour déterminer le gagnant
            const derniereCarteA = tempA || 0; // Utilisation de 0 si tempA est undefined
            const derniereCarteB = tempB || 0; // Utilisation de 0 si tempB est undefined

            if (getValeurCarte(derniereCarteA) > getValeurCarte(derniereCarteB)) {
                joueurA.unshift(...cartesEnJeu);
                console.log("Joueur A gagne la bataille !");
            } else if (getValeurCarte(derniereCarteA) < getValeurCarte(derniereCarteB)) {
                joueurB.unshift(...cartesEnJeu);
                console.log("Joueur B gagne la bataille !");
            } else {
                console.log("Égalité pendant la bataille !");
            }
        } else {
            // Comparaison normale des cartes
            if (valeurCarteA > valeurCarteB) {
                joueurA.unshift(tempA, tempB);
                console.log("Joueur A gagne la manche !");
            } else if (valeurCarteA < valeurCarteB) {
                joueurB.unshift(tempB, tempA);
                console.log("Joueur B gagne la manche !");
            }
        }
    }
}

/*
function joueBataille (joueurA, joueurB){
    for (let i=0; i<ARRET_URGENT;i++){
        if (joueurA.length == 0){
            console.log('Joueur A WIN !')
        }else if (joueurB.length == 0){
            console.log('Joueur B WIN !')
        }





    }
}*/