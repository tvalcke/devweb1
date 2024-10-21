let fruits = [
    {lib: 'poire', prix: 4.16},
    {lib: 'ananas', prix: 2.99},
    {lib: 'dattes', prix: 6.25},
    {lib: 'orange', prix: 1.50},
    {lib: 'pomme', prix: 1.79},
    {lib: 'banane', prix: 2.31},
    {lib: 'citron', prix: 3.70},
    {lib: 'raisin', prix: 2.49},
    {lib: 'noix', prix: 7.80},
    {lib: 'prune', prix: 4.52},
    {lib: 'peche', prix: 3.99}
   ];
let legumes = [
    {lib: 'carotte', prix: 1.05},
    {lib: 'oignon', prix: 0.55},
    {lib: 'ail', prix: 1.49},
    {lib: 'celeri', prix: 1.71},
    {lib: 'fenouil', prix: 2.11},
    {lib: 'patate', prix: 1.32},
    {lib: 'navet', prix: 0.93},
    {lib: 'potiron', prix: 1.14},
    {lib: 'courge', prix: 0.98}
   ];

let commande =[];
let total = 0;

// Ajouter un gestionnaire d'événements onclick à chaque bouton radio -- après chargement page sinon j'ai une erreur en console 
document.addEventListener('DOMContentLoaded', function() {
    var fruitsRadio = document.getElementById('fruitsRadio');
    var legumesRadio = document.getElementById('legumesRadio');
    
    // Vérifier si les éléments ont été trouvés avant d'ajouter les écouteurs d'événements
    if (fruitsRadio && legumesRadio) {
        fruitsRadio.addEventListener('click', function() {
            console.log('Bouton "Fruits" cliqué');
            setSelect('1');
        });

        legumesRadio.addEventListener('click', function() {
            console.log('Bouton "Légumes" cliqué');
            setSelect('2');
        });
    }
});

function setElem(id, v){        //Ok ça roule 
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function getElem(id){        //Ok ça roule        
    return document.getElementById(id).innerHTML;
}

function addElem(id,v){        //Ok ça roule        
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML += v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function refElem(id){        //Ok ça roule        
    return document.getElementById(id);
}

function setSelect(article) {        //Ok ça roule  
    // Vider les listes déroulantes
    var list1 = refElem("list1");
    var list2 = refElem("list2");
    list1.innerHTML = "";
    list2.innerHTML = "";


    if (article == '1'){
        var list1 = refElem("list1");
        var list2 = refElem("list2");
    
        for (var i = 0; i < fruits.length; i++) {   // Ajouter les options aux listes déroulantes
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
    
            option1.text = fruits[i].lib;
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
    }else if (article == '2'){
        var list1 = refElem("list1");
        var list2 = refElem("list2");
    
        for (var i = 0; i < legumes.length; i++) {   // Ajouter les options aux listes déroulantes
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
    
            option1.text = legumes[i].lib;
            option1.value = i;
            option2.text = legumes[i].prix.toFixed(2) + "€";
            option2.value = i;
    
            list1.appendChild(option1);
            list2.appendChild(option2);
        }
    
        list1.setAttribute("size", legumes.length);
        list2.setAttribute("size", legumes.length);
    
        if (!list1.hasAttribute("required")) {
            list1.setAttribute("required", "true");
        }
        if (!list2.hasAttribute("required")) {
            list2.setAttribute("required", "true");
        }
    
        list1.selectedIndex = -1;
        list2.selectedIndex = -1;
    }

}

function synchroSelect() {        //Ok ça roule        
    var list1 = refElem("list1");
    var list2 = refElem("list2");

    list1.onclick = function() {
        list2.selectedIndex = list1.selectedIndex;
    };

    list2.onclick = function() {
        list1.selectedIndex = list2.selectedIndex;
    };
}

function init() {        //Ok ça roule        
    fruits.sort((a, b) => a.lib.localeCompare(b.lib)); // Trier le tableau de fruits par ordre alphabétique
    legumes.sort((a, b) => a.lib.localeCompare(b.lib)); // Trier le tableau de légumes par ordre alphabétique
    setSelect('1');
    synchroSelect();
    setElem('prix',total.toFixed(2));
}

function ajouterElement(formulaire) {        //Ok ça roule  
    var typeProduit, poids, numeroProduit, produitEtPrix, produit, prixAuKg, prix, quantiteEnKg;

    if (fruitsRadio.checked) {
        typeProduit = fruits;
    } else if (legumesRadio.checked) {
        typeProduit = legumes;
    }

    poids = formulaire.poids.value;
    numeroProduit = formulaire.list1.value;
    produitEtPrix = typeProduit[numeroProduit];
    produit = produitEtPrix.lib;
    prixAuKg = produitEtPrix.prix;
    prix = (prixAuKg / 1000) * poids;
    quantiteEnKg = poids / 1000;

    var index = commande.findIndex(function (element) {
        return element[0] === produit;
    });

    if (index !== -1) {
        var ancienPrix = commande[index][1];
        var ancienneQuantite = commande[index][2];
        var nouveauPrix = ancienPrix + prix;
        var nouvelleQuantite = ancienneQuantite + quantiteEnKg;
        commande[index][1] = nouveauPrix;
        commande[index][2] = nouvelleQuantite;

        var cellules = document.querySelectorAll('#donnees tr td#fruit');
        cellules[index].nextElementSibling.textContent = prixAuKg.toFixed(2);
        cellules[index].nextElementSibling.nextElementSibling.textContent = nouvelleQuantite.toFixed(2);
        cellules[index].nextElementSibling.nextElementSibling.nextElementSibling.textContent = nouveauPrix.toFixed(2);
    } else {
        var tabCommande = [produit, prix, quantiteEnKg];
        commande.push(tabCommande);

        addElem("donnees", "<tr><td id='fruit'>" + produit + "</td><td id='aDroite'>" + prixAuKg.toFixed(2) + "</td><td id='aDroite'>" + quantiteEnKg.toFixed(2) + "</td><td id='aDroiteTotal'>" + prix.toFixed(2) + "</td></tr>");
    }

    var prixTotal = parseFloat(getElem('prix')) + prix;
    setElem('prix', prixTotal.toFixed(2));

    formulaire.poids.value = getElem('poids');
    formulaire.list1.selectedIndex = -1;
    formulaire.list2.selectedIndex = -1;

    return false;
}

function enleverElement() {        //// Ca ne vas pas ////
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

function imprimer() {        //Ok ça roule  

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

function viderCommande(){        //Ok ça roule  
    commande = [];
    let nouveauTotal = total.toFixed(2);
    setElem('prix',nouveauTotal);
    setElem('donnees',"");
}
