// Tris
var passages = {
    "Méca" : new Date("Mon Nov 20 2017 12:49:42 GMT+0100 (Paris, Madrid)"),
    "Kot-à-Jeux" : new Date("Mon Nov 20 2017 12:46:45 GMT+0100 (Paris, Madrid)"),
    "Course" : new Date("Mon Nov 20 2017 12:49:20 GMT+0100 (Paris, Madrid)")
}

function initialiserPage() {        // Ok ça roule
    passages = {};
    var tableSection = document.getElementById('tableSection');
    var tableHTML = "<table><thead><th>Nom</th><th>Derniers passages</th></thead><tbody id='passages'></tbody></table>";
    tableSection.innerHTML = tableHTML;
}

function genererTable() {        // Ok ça roule
    var lignesTableau = "";
    for (var nom in passages) {
        var date = passages[nom].toLocaleString('fr-BE');       // pour mettre le bon format de date ( trouvé sur stack overflow )
        lignesTableau += "<tr><td>" + nom + "</td><td>" + date + "</td></tr>";
    }
    return lignesTableau;
}

function ajouterPassage(formulaire) {        // Ok ça roule
    var nom = formulaire.nom.value;
    passages[nom] = new Date();

    var tablePassages = document.getElementById('passages');
    tablePassages.innerHTML = genererTableTriee();
}

function genererTableTriee() {        // Ok ça roule
    var keys = Object.keys(passages);

    var nomsFiltres = keys.filter(function(nom) {// Filtrer les noms de moins de 4 caractères
        return nom.length >= 4;
    });

    nomsFiltres.sort();

    var lignesTableau = "";

    for (var i = 0; i < nomsFiltres.length; i++) {
        var nom = nomsFiltres[i];
        var date = passages[nom].toLocaleString('fr-BE');
        lignesTableau += "<tr><td>" + nom + "</td><td>" + date + "</td></tr>";
    }

    return lignesTableau;
}