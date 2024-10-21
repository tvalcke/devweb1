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

// Va faire en sorte que si /kg est sélectionné, le champ poids soit affiché, sinon il sera caché et inversément
document.addEventListener('DOMContentLoaded', function() {
    var list3 = document.getElementById('list3');
    var poidsLabel = document.querySelector('label[for="poids"]');
    var poidsInput = document.getElementById('poids');
    document.getElementById('list3').addEventListener('click', function() {
        var selectedOption = fruits[list3.selectedIndex];

        if (selectedOption.mode === '/pc') {
            poidsLabel.textContent = 'quantité :';
            poidsInput.setAttribute('type', 'number');
            poidsInput.setAttribute('min', '0');
            poidsInput.setAttribute('max', '20');
            poidsInput.setAttribute('step', '1');
            poidsInput.setAttribute('placeholder',"entre 1 et 20 articles");
        } else {
            poidsLabel.textContent = 'poids :';
            poidsInput.setAttribute('type', 'number');
            poidsInput.setAttribute('min', '50');
            poidsInput.setAttribute('max', '10000');
            poidsInput.setAttribute('step', '10');
            poidsInput.setAttribute('placeholder',"entre 50g et 10kg");
        }
    });
});

function setElem(id, v){
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function getElem(id){
    return document.getElementById(id).innerHTML;
}

function addElem(id,v){
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML += v;
    } else {
        console.error("L'élément avec l'ID spécifié n'existe pas.");
    }
}

function refElem(id){     
    return document.getElementById(id);
}

function setSelect() {
    var list1 = refElem("list1");
    var list2 = refElem("list2");
    var list3 = refElem("list3");
    var poidsLabel = document.querySelector('label[for="poids"]');
    var poidsInput = document.getElementById('poids');

    list1.innerHTML = "";
    list2.innerHTML = "";
    list3.innerHTML = "";

    for (var i = 0; i < fruits.length; i++) {
        var option1 = document.createElement("option");
        var option2 = document.createElement("option");
        var option3 = document.createElement("option");

        option1.text = fruits[i].fruit;
        option1.value = i;
        option2.text = fruits[i].prix.toFixed(2) + "€";
        option2.value = i;
        option3.text = fruits[i].mode;
        option3.value = i;

        list1.appendChild(option1);
        list2.appendChild(option2);
        list3.appendChild(option3);
    }

    list1.setAttribute("size", fruits.length);
    list2.setAttribute("size", fruits.length);
    list3.setAttribute("size", fruits.length);

    var selectedOption = fruits[list1.selectedIndex];

    if (selectedOption && selectedOption.mode === '/pc') {
        poidsLabel.textContent = 'quantité :';
        poidsInput.setAttribute('type', 'number');
        poidsInput.setAttribute('min', '0');
        poidsInput.setAttribute('max', '20');
        poidsInput.setAttribute('step', '1');
    } else {
        poidsLabel.textContent = 'poids :';
        poidsInput.setAttribute('type', 'number');
        poidsInput.setAttribute('min', '50');
        poidsInput.setAttribute('max', '10000');
        poidsInput.setAttribute('step', '10');
    }
}

function synchroSelect() {       
    var list1 = refElem("list1");
    var list2 = refElem("list2");
    var list3 = refElem("list3");

    list1.onclick = function() {
        list2.selectedIndex = list1.selectedIndex;
        list3.selectedIndex = list1.selectedIndex;
    };

    list2.onclick = function() {
        list1.selectedIndex = list2.selectedIndex;
        list3.selectedIndex = list2.selectedIndex;
    };

    list3.onclick = function() {
        list1.selectedIndex = list3.selectedIndex;
        list2.selectedIndex = list3.selectedIndex;
    }
}

function init() {       
    fruits.sort((a, b) => a.fruit.localeCompare(b.fruit)); // Trier le tableau de fruits par ordre alphabétique
    setSelect();
    synchroSelect();
    setElem('prix',total.toFixed(2));
}

function ajouterElement(formulaire) {
    var typeProduit, poids, numeroProduit, produitEtPrix, produit, prixAuKg, prix, quantiteEnKg;

    if (fruitsRadio.checked) {
        typeProduit = fruits;
    } else if (legumesRadio.checked) {
        typeProduit = legumes; // Vous devrez définir la variable legumes
    }

    poids = formulaire.poids.value;
    var selectedOption = fruits[list3.selectedIndex];

    if (selectedOption && selectedOption.mode === '/pc') {
        poids = poids * 1000;
    }
    numeroProduit = formulaire.list1.value;
    produitEtPrix = typeProduit[numeroProduit];
    produit = produitEtPrix.fruit;
    prixAuKg = produitEtPrix.prix;
    prix = (prixAuKg / 1000) * poids;
    quantiteEnKg = poids / 1000;

    var index = commande.findIndex(function (element) {
        return element[0] === produit;
    });

    if (index !== -1) {
        // Mise à jour du prix et de la quantité si le produit est déjà présent dans la commande
        var ancienPrix = commande[index][1];
        var ancienneQuantite = commande[index][2];
        var nouveauPrix = ancienPrix + prix;
        var nouvelleQuantite = ancienneQuantite + quantiteEnKg;
        commande[index][1] = nouveauPrix;
        commande[index][2] = nouvelleQuantite;

        // Mettre à jour les cellules du tableau HTML
        var cellules = document.querySelectorAll('#donnees tr td#fruit');
        cellules[index].nextElementSibling.textContent = prixAuKg.toFixed(2);

        if (selectedOption && selectedOption.mode === '/pc') {
            cellules[index].nextElementSibling.nextElementSibling.textContent = nouvelleQuantite + "/pc";
        } else {
        cellules[index].nextElementSibling.nextElementSibling.textContent = nouvelleQuantite.toFixed(2) + "/Kg";
        }
        cellules[index].nextElementSibling.nextElementSibling.nextElementSibling.textContent = nouveauPrix.toFixed(2);
    } else {
        // Ajouter le produit à la commande si ce n'est pas déjà le cas
        if (selectedOption && selectedOption.mode === '/pc') {
            var tabCommande = [produit, prix, quantiteEnKg,true];   // true pour /pc
        } else {
            var tabCommande = [produit, prix, quantiteEnKg,false];  // false pour /kg
        }
        commande.push(tabCommande);

        if (selectedOption && selectedOption.mode === '/pc') {
            addElem("donnees", "<tr><td id='fruit'>" + produit + "</td><td id='aDroite'>" + prixAuKg.toFixed(2) + "</td><td id='aDroite'>" + quantiteEnKg+ "/pc</td><td id='aDroiteTotal'>" + prix.toFixed(2) + "</td></tr>");
        } else {
        addElem("donnees", "<tr><td id='fruit'>" + produit + "</td><td id='aDroite'>" + prixAuKg.toFixed(2) + "</td><td id='aDroite'>" + quantiteEnKg.toFixed(2) + "/Kg</td><td id='aDroiteTotal'>" + prix.toFixed(2) + "</td></tr>");
        }
    } 

    // Mettre à jour le prix total affiché
    total = parseFloat(getElem('prix')) + prix;
    setElem('prix', total.toFixed(2));

    // Réinitialiser les sélecteurs et les champs de saisie
    formulaire.poids.value = getElem('poids');
    formulaire.list1.selectedIndex = -1;
    formulaire.list2.selectedIndex = -1;

    return false;
}

function enleverElement(){      // Ca ne vas et je ne comprends pas pourquoi
    let aEnlever = document.getElementById('list1').value;
    for (i in commande){
        if (commande[i][0] === fruits[aEnlever].fruit){
            var prixElement = commande[i][1];
            commande.splice(i,1);
        }
    }
    // Supprimer le tableau html
    var tableBody = refElem('donnees');
    tableBody.innerHTML = ""; // Effacer le contenu actuel du tableau

    // Reconstruire le tableau HTML avec les éléments restants
    for (var i = 0; i < commande.length; i++) {
        var fruit = commande[i][0];
        var prixAuKg = commande[i][1].toFixed(2);
        var quantiteEnKg = commande[i][2].toFixed(2);
        var prixTotal = commande[i][1] * commande[i][2];
        var selectedOption = commande[i][3];

        if (selectedOption) {
        addElem("donnees", "<tr><td id='fruit'>" + fruit + "</td><td id='aDroite'>" + prixAuKg + "</td><td id='aDroite'>" + quantiteEnKg + "/pc</td><td id='aDroiteTotal'>" + prixTotal.toFixed(2) + "</td></tr>");
        } else {
        addElem("donnees", "<tr><td id='fruit'>" + fruit + "</td><td id='aDroite'>" + prixAuKg + "</td><td id='aDroite'>" + quantiteEnKg + "/Kg</td><td id='aDroiteTotal'>" + prixTotal.toFixed(2) + "</td></tr>");
        }
    }
    // Mettre à jour le prix total affiché
    total = parseFloat(getElem('prix')) - prixElement;
    setElem('prix', total.toFixed(2));
}

function imprimer() {

    if (commande.length === 0) {
        console.error("La commande est vide.");
        alert("La commande est vide.");
        return;
    }else{
        var dateActuelle = new Date();
    
        var prixTotal = getElem('prix');
        // Générer le code-barres
        var codeBarreDiv = refElem("codeBarre");
        var codeBarre = DrawHTMLBarcode_Code39(prixTotal,true, 3);
    
        // Insérer le code-barres dans la div cachée
        codeBarreDiv.innerHTML = codeBarre;
        //addElem('date',date + "/" + mois + "    " + heure+"h"+minutes);
        addElem('date',dateActuelle);
        var style = document.createElement('style');
        style.innerHTML = '@media print { #codeBarre { display: block; } }';
        style.innerHTML = '@media print { #date { display: block; } }';
        document.head.appendChild(style);
        // Lancer l'impression
        window.print();
    }
}

function viderCommande(){
    commande = [];
    let nouveauTotal = total.toFixed(2);
    setElem('prix',nouveauTotal);
    setElem('donnees',"");
}

