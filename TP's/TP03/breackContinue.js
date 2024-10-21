let total = 0;
let nombreCotes = 4;
for (let i=0,cote,texte; i < nombreCotes; i++) {
    texte = prompt(`Introduisez une cote [0..20] (cote n°` + (i+1) + `/` +
    nombreCotes + ` :`);
    if (texte=="" || isNaN(cote = +texte)){
        break
        i--;
    }
    if (cote === 0) {
        continue
        total = 0;
    }
    else {
        total += cote;
    }
    }
alert("La moyenne est de : " + (total / nombreCotes).toFixed(2) );
