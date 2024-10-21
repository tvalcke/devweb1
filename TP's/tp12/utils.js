var catalogue = {
    '0124': {auteur: 'B. Y.', titre: 'Connectique', pret:true, dte: new Date(2014,9,11)},
    '0254': {auteur: 'L. Ch.', titre: 'Programmation C', pret:false},
    '0334': {auteur: 'L. Ch.', titre: 'JavaScript', pret:false},
    '0250': {auteur: 'D. A.', titre: 'Mathématiques', pret:false},
    '0604': {auteur: 'L. Ch.', titre: 'Objets', pret:false},
    '0025': {auteur: 'DV. M.', titre: 'Electricité', pret:false},
    '0099': {auteur: 'B. Y.', titre: 'Phénomènes Périodiques', pret:false},
    '0023': {auteur: 'V. M-N.', titre: 'Programmation Java', pret:false},
    '0100': {auteur: 'L. Ch.', titre: 'Bases de Données', pret:false},
    '0147': {auteur: 'VD. V.', titre: 'Traitement de Signal', pret:false},
    '0004': {auteur: 'D. Y.', titre: 'Programmation Multimedia', pret:true, dte: new Date(2014,10,6)},
    '0033': {auteur: 'M. C.', titre: "Systèmes d'exploitation", pret:false}
}

function init(){
    dessinerD();
    dessinerP();
}

function dessinerD() {
    document.getElementById('bodyCatalogue').innerHTML = '';

    for (var cle in catalogue) {
        var livre = catalogue[cle];

        if (livre.hasOwnProperty('pret')) {
            var estEnPret = livre.pret;

            if (!estEnPret) {
                document.getElementById('bodyCatalogue').innerHTML = document.getElementById('bodyCatalogue').innerHTML + 
                        "<tr><td class='ref2' onclick=\"document.getElementById('txtEmprunt').placeholder = '" + cle + "';\">" + cle 
                        + "</td><td class='auteur2'>" + livre.auteur 
                        +"</td><td class='titre2'>"+livre.titre 
                        +"</td></tr>";
            }
        }
    }
}

function dessinerP(){
    document.getElementById('bodyPrets').innerHTML = '';

    for (var cle in catalogue) {
        var livre = catalogue[cle];

        if (livre.hasOwnProperty('pret')) {
            var estEnPret = livre.pret;

            if (estEnPret) {
                var date = livre.dte
                var jour = date.getDate();
                var mois = date.getMonth() + 1;
                var annee = date.getFullYear();

                var dateFinale = (jour +"/"+ mois +"/"+ annee);

                document.getElementById('bodyPrets').innerHTML = document.getElementById('bodyPrets').innerHTML +
                        "<tr><td class='ref2' onclick=\"document.getElementById('txtRendre').placeholder = '" + cle + "';\">" + cle + "</td><td class='auteur2'>" + livre.auteur +
                        "</td><td class='titre2'>"+livre.titre +
                        "</td><td class='depuis2'>"+dateFinale+
                        "</td></tr>";
            }
        }
    }
}

function emprunter(){
    var aEmprunter = document.getElementById('txtEmprunt').placeholder;
    for (var cle in catalogue) {
        var livre = catalogue[cle];

        if(cle === aEmprunter){
            livre.pret = true;
            
            livre.dte = new Date();  // ajoute une date et la remplace si il y en a deja une
            
        }
    }
    init();
}

function rendre(){
    var aRendre = document.getElementById('txtRendre').placeholder;
    for (var cle in catalogue) {
        var livre = catalogue[cle];

        if(cle === aRendre){
            livre.pret = false;
        }
    }
    init();
}