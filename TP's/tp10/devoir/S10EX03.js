var fruits = [ // tableau d'objets
 {fruit: 'poire', mode: '/kg', prix: 4.16}, // au poids
 {fruit: 'ananas', mode: '/pc', prix: 2.99}, // la pièce
 {fruit: 'dattes', mode: '/pc', prix: 6.25}, // un ravier
 {fruit: 'orange', mode: '/kg', prix: 1.50},
 {fruit: 'pomme', mode: '/kg', prix: 1.79},
 {fruit: 'banane', mode: '/pc', prix: 2.31}, // un régime
 {fruit: 'citron', mode: '/pc', prix: 0.70},
 {fruit: 'raisin', mode: '/pc', prix: 2.49}, // une grappe
 {fruit: 'noix', mode: '/kg', prix: 7.80},
 {fruit: 'prune', mode: '/kg', prix: 4.52},
 {fruit: 'pêche', mode: '/kg', prix: 3.99},
 {fruit: 'coco', mode: '/pc', prix: 4.45} // une noix de coco
]; 

let commande = [];
let total = 0;

document.addEventListener('DOMContentLoaded', function() {
    var fruitsRadio = document.getElementById('fruitsRadio');
    var legumesRadio = document.getElementById('legumesRadio');

    fruitsRadio.addEventListener('click', function() {
        setSelect('1');
    });

    legumesRadio.addEventListener('click', function() {
        setSelect('2');
    });

    init();
});

function setElem(id, v) {
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function getElem(id) {
    return document.getElementById(id).innerHTML;
}

function addElem(id, v) {
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML += v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function refElem(id) {
    return document.getElementById(id);
}

function setSelect(article) {
    var list1 = refElem("list1");
    var list2 = refElem("list2");
    var modeVente = refElem("modeVente");

    list1.innerHTML = "";
    list2.innerHTML = "";

    for (var i = 0; i < produits.length; i++) {
        if ((article === '1' && produits[i].mode === '/kg') || (article === '2' && produits[i].mode === '/pc')) {
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");

            option1.text = produits[i].fruit;
            option1.value = i;
            option2.text = produits[i].prix.toFixed(2) + "€" + produits[i].mode;
            option2.value = i;

            list1.appendChild(option1);
            list2.appendChild(option2);
        }
    }

    list1.selectedIndex = -1;
    list2.selectedIndex = -1;
}

function synchroSelect() {
    var list1 = refElem("list1");
    var list2 = refElem("list2");

    list1.onclick = function() {
        list2.selectedIndex = list1.selectedIndex;
    };

    list2.onclick = function() {
        list1.selectedIndex = list2.selectedIndex;
    };
}

function init() {
    produits.sort((a, b) => a.fruit.localeCompare(b.fruit));
    setSelect('1');
    synchroSelect();
    setElem('prix', total.toFixed(2));
}

function ajouterElement(formulaire) {
    var typeProduit, poids, numeroProduit, produitEtPrix, produit, prixAuKg, prix, quantite;

    if (document.getElementById('fruitsRadio').checked) {
        typeProduit = produits.filter(produit => produit.mode === '/kg');
    } else if (document.getElementById('legumesRadio').checked) {
        typeProduit = produits.filter(produit => produit.mode === '/pc');
    }

    poids = parseFloat(formulaire.poids.value);
    numeroProduit = formulaire.list1.value;
    quantite = parseFloat(formulaire.list2.value);

    produitEtPrix = typeProduit[numeroProduit];
    produit = produitEtPrix.fruit;
    prixAuKg = produitEtPrix.prix;
    
    if (produitEtPrix.mode === '/kg') {
        prix = (prixAuKg / 1000) * poids;
    } else {
        prix = prixAuKg * quantite;
    }

    var index = commande.findIndex(element => element[0] === produit);

    if (index !== -1) {
        var ancienPrix = commande[index][1];
        var ancienneQuantite = commande[index][2];

        var nouveauPrix = ancienPrix + prix;
        var nouvelleQuantite = ancienneQuantite + quantite;

        commande[index][1] = nouveauPrix;
        commande[index][2] = nouvelleQuantite;

        var cellules = document.querySelectorAll('#donnees tr td#fruit');
        cellules[index].nextElementSibling.textContent = prixAuKg.toFixed(2);
        cellules[index].nextElementSibling.nextElementSibling.textContent = nouvelleQuantite.toFixed(2);
        cellules[index].nextElementSibling.nextElementSibling.nextElementSibling.textContent = nouveauPrix.toFixed(2);
    } else {
        var tabCommande = [produit, prix, quantite];
        commande.push(tabCommande);

        addElem("donnees", "<tr><td id='fruit'>" + produit + "</td><td id='aDroite'>" + prixAuKg.toFixed(2) + "</td><td id='aDroite'>" + quantite.toFixed(2) + "</td><td id='aDroiteTotal'>" + prix.toFixed(2) + "</td></tr>");
    }

    var prixTotal = parseFloat(getElem('prix')) + prix;
    setElem('prix', prixTotal.toFixed(2));

    formulaire.poids.value = getElem('poids');
    formulaire.list1.selectedIndex = -1;
    formulaire.list2.selectedIndex = -1;

    return false;
}

function enleverElement() {
    var list1 = refElem("list1");
    var selectedIndex = list1.selectedIndex;

    if (selectedIndex !== -1) {
        var fruitEnleve = commande[selectedIndex][0];

        list1.remove(selectedIndex);

        var tableBody = refElem('donnees');
        tableBody.innerHTML = "";

        commande.splice(selectedIndex, 1);

        for (var i = 0; i < commande.length; i++) {
            var fruit = commande[i][0];
            var prixAuKg = commande[i][1].toFixed(2);
            var quantite = commande[i][2].toFixed(2);
            var prixTotal = commande[i][1] * commande[i][2];

            addElem("donnees", "<tr><td id='fruit'>" + fruit + "</td><td id='aDroite'>" + prixAuKg + "</td><td id='aDroite'>" + quantite + "</td><td id='aDroiteTotal'>" + prixTotal.toFixed(2) + "</td></tr>");
        }

        var nouveauTotal = 0;
        for (var j = 0; j < commande.length; j++) {
            nouveauTotal += commande[j][1] * commande[j][2];
        }
        setElem('prix', nouveauTotal.toFixed(2));
    } else {
        console.error("Aucun élément sélectionné pour être enlevé.");
    }
}

function imprimer() {
    if (commande.length === 0) {
        console.error("La commande est vide.");
        alert("La commande est vide.");
        return;
    } else {
        // Logique pour imprimer le ticket de caisse
    }
}

function viderCommande() {
    commande = [];
    total = 0;
    setElem('prix', total.toFixed(2));
    setElem('donnees', "");
}
