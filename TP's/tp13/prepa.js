// 1  //////////////////////////////////////////////////////////////////////////
var str ="Une chaîne de plusieurs mots";

function extraireAvecFor(str){
    var firstWord = '';
    for (let i=0;i<str.length;i++){
        if (str[i]===' '){
            break;
        }
        firstWord += str[i];
    }
    console.log(firstWord);
}

function extraireAvecSplit(str){
    var words = str.split(' ');
    console.log(words[0]);
}

// 2 //////////////////////////////////////////////////////////////////////////

var bieres1 = ['chimay bleue',
 'orval',
 'chimay rouge',
 'maredsous triple',
 'triple karmeliet',
 'leffe royale',
 'chimay dorée',
 'leffe ruby',
 'leffe brune',
 'maredsous blonde'
 ];

function trierOrdreAlphabetique(tab){
    tab.sort(function(a,b){
        if (a>b){return 1};
        if (a<b){return -1};
        return 0
    });
    return tab;
}

function garderChimay(tab) {
    var newTab = [];

    for (let j = 0; j < tab.length; j++) {
        var str = tab[j];
        var firstWord = '';

        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                break;
            }
            firstWord += str[i];
        }

        if (firstWord === 'chimay') {
            newTab.push(tab[j]);
        }
    }

    return newTab;
}

function combienDeLeffes(tab){
    var tabLeffe = [];

    for( let i=0;i<tab.length;i++){
        var firstWord = '';
        var str = tab[i];

        for (let j=0; j<str.length;j++){
            if (str[j]===' '){
                break;
            }
            firstWord += str[j];
        }

        if (firstWord === 'leffe'){
            tabLeffe.push(tab[i]);
        }
    }
    return tabLeffe.length;
}

// 3 //////////////////////////////////////////////////////////////////////////

var bieres2 = [{biere: 'chimay bleue', casiers: 5},
 {biere: 'orval', casiers: 2},
 {biere: 'chimay rouge', casiers: 6},
 {biere: 'maredsous triple', casiers: 5},
 {biere: 'triple karmeliet', casiers: 4},
 {biere: 'leffe royale', casiers: 1},
 {biere: 'chimay dorée', casiers: 5},
 {biere: 'leffe ruby', casiers: 3},
 {biere: 'leffe brune', casiers: 1},
 {biere: 'maredsous blonde', casiers: 2}
 ];

 function trierOrdreAlphabetiqueNom (tab){ // Trier par ordre alphabétique avec un tableau d'objetsS
    tab.sort(function(a,b){
        var nomA = a.biere;
        var nomB = b.biere;

        if (nomA > nomB){return 1};
        if (nomA < nomB){return -1};
        return 0;
    });
    console.log(tab);
}

function garderChimay2(tab){
    var chimay = [];

    for (let i=0; i<tab.length; i++){
        var firstWord = '';
        var str = tab[i].biere;

        for (let k=0; k<str.length; k++){
            if (str[k] === ' '){
                break;
            }
            firstWord += str[k];
        }

        if (firstWord === 'chimay' || firstWord === 'Chimay'){
            chimay.push(tab[i]);
        }
    }
    console.log(chimay);
}

function stockDeCasiers (tab){
    var aCommander = [];
    var compteur = 0;
    for (let k=0; k<tab.length; k++){
        nombreCasiers = tab[k].casiers;
        compteur += nombreCasiers;

        if (nombreCasiers < 3){
            aCommander.push(tab[k].biere);
        }
    }

    aCommander.sort(function(a,b){  //Trier les bières à commander
        if (a > b){return 1};
        if (a < b){return -1}
        return 0
    });


    console.log('Il reste '+compteur+' casiers en stock');
    console.log('Il faut recommander les bieres suivantes: ');
    console.log(aCommander);
}

var livraison1 = [{biere: 'leffe brune', casiers: 4},
 {biere: 'westmalle extra', casiers: 3},
 {biere: 'orval', casiers: 3},
 {biere: 'leffe royale', casiers: 4},
 {biere: 'westmalle triple', casiers: 5}
 ];

function livraison(stock, livraison){
    /* Stock et livraison sont deux tableaux d'objets */
    for ( let k=0; k< livraison.length; k++){
        var arrivage = livraison [k].biere

        for(let i=0; i< stock.length; i++){
            if (stock[i].biere === arrivage){
                stock[i].casiers += livraison[k].casiers;
            }
        }
    }
    console.log('Voici le stock après arrivage:', stock);
}

// 4 //////////////////////////////////////////////////////////////////////////

var bieres3 = { 'chimay bleue': 5,
 'orval': 2,
 'chimay rouge': 6,
 'maredsous triple': 5,
 'triple karmeliet': 4,
 'leffe royale': 1,
 'chimay dorée': 5,
 'leffe ruby': 3,
 'leffe brune': 1,
 'maredsous blonde': 2
};

function convertEnTableaudObjects (obj){
    var tableau = [];
    var size = Object.keys(obj).length;
    for (let prop in obj){
        var newObject = new Object ();
        newObject["biere"] = prop;
        newObject["casiers"]= obj[prop];
        tableau.push(newObject);
    }
    return tableau;
}

// 5 //////////////////////////////////////////////////////////////////////////

var ranking = { 'orval': '****',
    'westmalle triple': '****',
    'chimay rouge': '**',
    'maredsous triple': '***',
    'leffe royale': '*',
    'chimay dorée': '***',
    'leffe ruby': '**',
    'triple karmeliet': '****',
    'leffe brune': '***',
    'maredsous blonde': '***',
    'chimay bleue': '*****',
    'westmalle extra': '***',
};

var bieres4 = { 'chimay bleue': 2,
    'orval': 1,
    'chimay rouge': 5,
    'maredsous triple': 3,
    'triple karmeliet': 2,
    'leffe royale': 1,
    'chimay dorée': 3,
    'leffe ruby': 4,
    'leffe brune': 1,
    'maredsous blonde': 2,
    'westmalle extra': 2,
    'westmalle triple': 2
};

function classementBieres(rank, stock){
    /* rank et stock sont deux tableaux associatifs*/

    var classementFinal = [];

    stock = convertEnTableaudObjects(stock);
    rank = convertEnTableaudObjects(rank);

    stock = trierOrdreAlphabetiqueNom (stock);
    rank = trierOrdreAlphabetiqueNom (rank);

    

}