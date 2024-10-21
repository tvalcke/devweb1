let fruits = [ // tableau d'objets
    {fruit: 'poire', prix: 4.16},
    {fruit: 'ananas', prix: 2.99},
    {fruit: 'dattes', prix: 6.25},
    {fruit: 'orange', prix: 1.50},
    {fruit: 'pomme', prix: 1.79},
    {fruit: 'banane', prix: 2.31},
    {fruit: 'citron', prix: 3.70},
    {fruit: 'raisin', prix: 2.49},
    {fruit: 'noix', prix: 7.80},
    {fruit: 'prune', prix: 4.52},
    {fruit: 'peche', prix: 3.99}
]; 

let commande =[];
let total = 0.00;

function setElem(id, v){        //OK tout roule
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function getElem(id){        //OK tout roule
    return document.getElementById(id).innerHTML;
}

function addElem(id,v){        //OK tout roule
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML += v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function refElem(id){        //OK tout roule
    return document.getElementById(id);
}

function setSelect() {        //OK tout roule
    var list1 = refElem("list1");
    var list2 = refElem("list2");

    for (var i = 0; i < fruits.length; i++) {   // Ajouter les options aux listes déroulantes
        var option1 = document.createElement("option");
        var option2 = document.createElement("option");

        option1.text = fruits[i].fruit;
        option1.value = i;
        option2.text = fruits[i].prix.toFixed(2) + "€";
        option2.value = i;

        list1.appendChild(option1);
        list2.appendChild(option2);
    }

    list1.setAttribute("size", fruits.length);
    list2.setAttribute("size", fruits.length);

    if (!list1.hasAttribute("required")) {
        list1.setAttribute("required", "true");
    }
    if (!list2.hasAttribute("required")) {
        list2.setAttribute("required", "true");
    }

    list1.selectedIndex = -1;
    list2.selectedIndex = -1;
}

function synchroSelect() {        //OK tout roule
    var list1 = refElem("list1");
    var list2 = refElem("list2");

    list1.onclick = function() {
        list2.selectedIndex = list1.selectedIndex;
    };

    list2.onclick = function() {
        list1.selectedIndex = list2.selectedIndex;
    };
}

function init() {        //OK tout roule
    fruits.sort((a, b) => a.fruit.localeCompare(b.fruit)); // Trier le tableau de fruits par ordre alphabétique
    setSelect();
    synchroSelect();
    let nouveauTotal = total.toFixed(2);
    setElem('prix',nouveauTotal);
}

function ajouterFruit(formulaire){        //OK tout roule
    var poids = formulaire.poids.value;
    var numeroFruit = formulaire.list1.value;
    var fruitEtPrix = fruits[numeroFruit];
    var fruit = fruitEtPrix.fruit;
    var prixAuKg = fruitEtPrix.prix;
    var prix = (prixAuKg / 1000) * poids;
    var quantiteEnKg = poids / 1000;

    // Vérifier si le fruit est déjà dans la commande
    var index = -1;
    for (var i = 0; i < commande.length; i++) {
        if (commande[i][0] === fruit) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        // Si le fruit est déjà dans la commande, mettre à jour la ligne existante
        var ancienPrix = commande[index][1];
        var ancienneQuantite = commande[index][2];
        var nouveauPrix = ancienPrix + prix;
        var nouvelleQuantite = ancienneQuantite + quantiteEnKg;
        commande[index][1] = nouveauPrix;
        commande[index][2] = nouvelleQuantite;

        // Mettre à jour l'affichage dans le tableau HTML
        var cellules = document.querySelectorAll('#donnees tr td#fruit');
        cellules[index].nextElementSibling.textContent = prixAuKg.toFixed(2);
        cellules[index].nextElementSibling.nextElementSibling.textContent = nouvelleQuantite.toFixed(2);
        cellules[index].nextElementSibling.nextElementSibling.nextElementSibling.textContent = nouveauPrix.toFixed(2);
    } else {
        // Si le fruit n'est pas dans la commande, l'ajouter
        var tabCommande = [fruit, prix, quantiteEnKg];
        commande.push(tabCommande);

        // Afficher dans le tableau HTML
        addElem("donnees", "<tr><td id='fruit'>" + fruit + "</td><td id='aDroite'>" + prixAuKg.toFixed(2) + "</td><td id='aDroite'>" + quantiteEnKg.toFixed(2) + "</td><td id='aDroiteTotal'>" + prix.toFixed(2) + "</td></tr>");
    }

    // Mettre à jour le prix total affiché
    var prixTotal = parseFloat(getElem('prix')) + prix;
    setElem('prix', prixTotal.toFixed(2));

    formulaire.poids.value = getElem('poids');
    formulaire.list1.selectedIndex = -1;
    formulaire.list2.selectedIndex = -1;

    return false;
}

function enleverFruit() {       ////////////////////////// Ne fonctionne plus ??? ca allait ??? ////////////////////////////
    var list1 = refElem("list1");
    var list2 = refElem("list2");

    if (list1.selectedIndex !== -1) {
        var selectedIndex = list1.selectedIndex;
        list1.remove(selectedIndex);
        list2.remove(selectedIndex);

        // Supprimer la ligne du tableau HTML correspondant au fruit enlevé
        var tableBody = refElem('donnees');
        tableBody.innerHTML = ""; // Effacer le contenu actuel du tableau

        // Mettre à jour le tableau commande
        commande.splice(selectedIndex, 1);

        // Reconstruire le tableau HTML avec les éléments restants
        for (var i = 0; i < commande.length; i++) {
            var fruit = commande[i][0];
            var prixAuKg = commande[i][1].toFixed(2);
            var quantiteEnKg = commande[i][2].toFixed(2);
            var prixTotal = commande[i][1] * commande[i][2];

            addElem("donnees", "<tr><td id='fruit'>" + fruit + "</td><td id='aDroite'>" + prixAuKg + "</td><td id='aDroite'>" + quantiteEnKg + "</td><td id='aDroiteTotal'>" + prixTotal.toFixed(2) + "</td></tr>");
        }

        // Mettre à jour le prix total affiché
        var nouveauTotal = 0;
        for (var j = 0; j < commande.length; j++) {
            nouveauTotal += commande[j][1] * commande[j][2];
        }
        setElem('prix', nouveauTotal.toFixed(2));
    } else {
        console.error("Aucun élément sélectionné pour être enlevé.");
    }
}

function imprimer() {        //Ca à l'air de rouler

    if (commande.length === 0) {
        console.error("La commande est vide.");
        alert("La commande est vide.");
        return;
    }else{
        var dateActuelle = new Date();
        var date = dateActuelle.getDate();
        var mois = dateActuelle.getMonth();
        var heure = dateActuelle.getHours();
        var minutes = dateActuelle.getMinutes();
    
        var prixTotal = getElem('prix');
        // Générer le code-barres
        var codeBarreDiv = refElem("codeBarre");
        var codeBarre = DrawHTMLBarcode_Code39(prixTotal,true, 3);
    
        // Insérer le code-barres dans la div cachée
        codeBarreDiv.innerHTML = codeBarre;
        addElem('date',date + "/" + mois + "    " + heure+"h"+minutes);
    
        var style = document.createElement('style');
        style.innerHTML = '@media print { #codeBarre { display: block; } }';
        document.head.appendChild(style);
        // Lancer l'impression
        window.print();
    }
}


/*
function viderCommande(){
    commande = [];
    let nouveauTotal = total.toFixed(2);
    setElem('prix',nouveauTotal);
    setElem('donnees',"");
}
*/

/*
///// ZONE DE TEST /////
setElem("prix", "39");
console.log(getElem('test'));
addElem("prix", "-"); 
addElem("prix", "45");  
console.log(refElem('test'));
*/