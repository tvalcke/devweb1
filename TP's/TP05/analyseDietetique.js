let pizzas = [5,2,3,4];

function introduirePizzas(){
    while (true){
        let entree = prompt("introduire pizzas");
        if (entree === "fin"){
            break;
        }else if (!isNaN(entree) && entree>=0 && entree != null && entree !=""){
            pizzas.push(Number(entree));
        }else if (entree === "sup"){
            pizzas.pop();
        }else if(entree === "reinit"){
            pizzas = [];
        }
    }
    return pizzas;
}

function afficherNombreSemaines(){
    let nombreSemaines = pizzas.length;
    if (nombreSemaines === 1){
        console.log ("Vous avez introduit des données pour 1 semaine.");
    }else if(nombreSemaines>0 ){
        console.log ("Vous avez introduit des données pour " + nombreSemaines + " semaines.");
    }else if(nombreSemaines ===0){
        console.log("-- Pas de données ! --");
    }
}

function afficherPizzasParSemaine(){
    if (pizzas.length === 0){
        console.log("-- Pas de données ! --");
    }else{
        for (let i = 0; i < pizzas.length; i++) {
            if (pizzas[i] === 1 || pizzas[i] === 0){
                console.log("Lors de la semaine " + (i+1) + ", vous avez mangé " + pizzas[i] + " pizza.");
            }else{
            console.log("Lors de la semaine " + (i+1) + ", vous avez mangé " + pizzas[i] + " pizzas.");
            }
        }
    }
}

function afficherMaximumPizzas(){
    let maxPizzas = 0 ;

    if (pizzas.length===0){
        console.log("-- Pas de données ! --");
    }else{

        for (let i=0 ; i<pizzas.length; i+=1){
            if ( pizzas[i]> maxPizzas){
                maxPizzas = pizzas[i];
            }
        }
        console.log("Le plus grand nombre de pizzas mangées en une semaine est : "+maxPizzas+".")
    }
}

function afficherPlusDe3Pizzas(){
    const LIMITE = 3;
    let compteur=0;

    if (pizzas.length===0){
        console.log("-- Pas de données ! --");
    }else{
        for (let i=0; i<pizzas.length; i+=1){
            if (pizzas[i]>LIMITE){
                compteur +=1;
            }
        } 
        let singPlur = (LIMITE > 1)? "pizzas" : "pizza";
        console.log("Vous avez mangé "+compteur +" fois plus de "+LIMITE +" "+ singPlur +" durant la semaine.");  
    } 
}

function afficherDernieresPizzas(nbrSemaines){
    let somme = 0;
    let toAdd;
    let tabSomme =[];
    if (pizzas.length===0){
        console.log("-- Pas de données ! --");
    }else{
        for(let i=nbrSemaines ; i>0;i-=1){
            if (pizzas.length>0){
                toAdd = pizzas.pop();
                somme += toAdd;
                tabSomme.push(toAdd);
            }else{
                break;
            } 
        }
        if (tabSomme.length===1){
            console.log("Lors de la dernière semaine, vous avez mangé "+ somme +" pizza.")
        }else{
            console.log("Lors des "+ nbrSemaines +" dernières semaines, vous avez mangé "+somme+" pizzas.");
        }      
    }
} 

function compterTotalPizzas() {
    let nbrDePizzas = 0;
    for (let i = 0; i < pizzas.length; i += 1) {
        nbrDePizzas += pizzas[i];
    }
    return nbrDePizzas;
}

function afficherPoidsPizzas() {
    const POIDS_PIZZAS = 0.25;
    let poids;
    let nbSem = pizzas.length;
    
    if (pizzas.length===0){
        console.log("-- Pas de données ! --");
    }else if (pizzas.length===1){
        console.log("Cette dernière semaine, vous avez mangé "+ (POIDS_PIZZAS*pizzas[0]).toFixed(2)+" kg de pizzas.")
    }else{
        let totalPizzas = compterTotalPizzas();     // Appeler la fonction et stockez le résultat
        poids = (totalPizzas * POIDS_PIZZAS).toFixed(2);
        console.log("Au total, sur les " + nbSem + " dernières semaines, vous avez mangé " + poids + " kg de pizzas. ");
    }
}

function afficherMoyennePizzas(){
    let moyenne;
    if (pizzas.length===0){
        console.log("-- Pas de données ! --");
    }else{
        let totalPizzas = compterTotalPizzas();
        moyenne = (totalPizzas/pizzas.length).toFixed(2);
        let singPlur = (moyenne >=0 && moyenne <=1)? "pizza" : "pizzas";
        console.log("En moyenne, vous avez mangé "+moyenne+" "+singPlur+" par semaine.");
    }
}

function afficherMaxPizzas(nbrSem) {
    let maxPizzas = 0;
    if (pizzas.length===0){
        console.log("-- Pas de données ! --");
    }else if (nbrSem<0){
        console.log("Nombre de semaines négatif : "+nbrSem);
    }else if (pizzas.length < nbrSem) {
        let ancienNbr = nbrSem;
        nbrSem = pizzas.length;
        for (let i = 0; i <= pizzas.length - nbrSem; i++) {
            let sum = 0;
            for (let j = i; j < i + nbrSem; j++) {
                sum += pizzas[j];
            }
            if (sum > maxPizzas) {
                maxPizzas = sum;
            }
        }
        let singPlurSemaine = (nbrSem<=1)? "semaine" : "semaines";
        let singPlurConsecutives = (nbrSem<=1)? "consécutive" : "consécutives";

        console.log("Nombre de semaines trop grand : " + ancienNbr);
        console.log("Le plus grand nombre de pizzas mangées sur " + nbrSem +" "+ singPlurSemaine+" "+singPlurConsecutives+ " est " + maxPizzas+ ".");
    }else {

        for (let i = 0; i <= pizzas.length - nbrSem; i++) {
            let sum = 0;
            for (let j = i; j < i + nbrSem; j++) {
                sum += pizzas[j];
            }
            if (sum > maxPizzas) {
                maxPizzas = sum;
            }
        }
        let singPlurSemaine = (nbrSem<=1)? "semaine" : "semaines";
        let singPlurConsecutives = (nbrSem<=1)? "consécutive" : "consécutives";

        console.log("Le plus grand nombre de pizzas mangées sur " + nbrSem +" "+ singPlurSemaine+" "+singPlurConsecutives+ " est " + maxPizzas+ ".");
    }
}