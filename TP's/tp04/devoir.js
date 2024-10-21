function sommeJusque( n ){
    let somme = 0;
    for (let i=0;i<=n;i+=1){
        somme+=i;
    
    }
    return somme;
}

function tousMoins4(points){
    let pointsReduits=[];
    let pointsSoustraits;
    for (let i=0 ; i<= points.length -1; i+=1){
        pointsSoustraits=points[i]-4;
        if (pointsSoustraits<0){
            pointsReduits.push(0);
        }else{
            pointsReduits.push(pointsSoustraits);
        }
    } 
    return pointsReduits
}    

let go = [ 1, 2, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 1, 5, 2, 4, 6, 5, 8, 9, 5, 4, 1, 2, 5, 7, 4, 8, 
    5, 6, 9, 8, 5, 4, 1, 2, 5, 4, 1, 5, 4, 7, 8, 4, 4, 5, 4, 7, 8, 5, 6, 8, 7, 4, 8, 5,
    9, 6, 8, 5, 7, 4, 8, 5, 8, 7, 4, 5, 1, 2, 1, 4, 5, 7, 4, 1, 3, 2, 5, 6, 9, 8, 7, 4, 
    1, 5, 8, 7, 4, 1, 5, 6, 9, 8, 7, 8, 9, 8, 7, 8, 8, 8, 7, 4, 5, 1, 2, 5, 4, 7, 8, 5,
    9, 6, 3, 2, 5, 1, 4, 1, 7, 4, 8, 5, 9, 6, 8, 5, 7, 4, 8, 5, 7, 5, 8, 5, 8, 5, 7, 4,
    8, 5, 8, 7, 4, 8, 5, 4, 5, 2, 5, 6, 5, 2, 5, 4, 4, 4, 4, 5, 8, 7, 4, 1, 5, 2, 5, 4,
    1, 5, 2, 6, 5, 2, 5, 4, 1, 5, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 7, 8, 5, 4, 1, 4, 8, 7,
    4, 5, 6, 8, 7, 4, 1, 5, 7, 4, 1, 5, 8, 7, 4, 1, 5, 8, 7, 4, 1, 5, 8, 7, 1, 2, 3, 5,
    4, 2, 7 ,8, 9, 8, 7, 8, 4, 6, 1, 2, 1, 2, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 1, 5, 2, 4,
    6, 5, 8, 9, 5, 4, 1, 2, 5, 7, 4, 8, 5, 6, 9, 8, 5, 4, 1, 2, 5, 4, 1, 5, 4, 7, 8, 4,
    4, 5, 4, 7, 8, 5, 6, 8, 7, 4, 8, 5, 9, 6, 8, 5, 7, 4, 8, 5, 8, 7, 4, 5, 1, 2, 1, 4,
    5, 7, 4, 1, 3, 2, 5, 6, 9, 8, 7, 4, 1, 5, 8, 7, 4, 1, 5, 6, 9, 8, 7, 8, 9, 8, 7, 8,
    8, 8, 7, 4, 5, 1, 2, 5, 4, 7, 8, 5, 9, 6, 3, 2, 5, 1, 4, 1, 7, 4, 8, 5, 9, 6, 8, 5,
    7, 4, 8, 5, 7, 5, 8, 5, 8, 5, 7, 4, 8, 5, 8, 7, 4, 8, 5, 4, 5, 2, 5, 6, 5, 2, 5, 4,
    4, 4, 4, 5, 8, 7, 4, 1, 5, 2, 5, 4, 1, 5, 2, 6, 5, 2, 5, 4, 1, 5, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 7, 8, 5, 4, 1, 4, 8, 7, 4, 5, 6, 8, 7, 4, 1, 5, 7, 4, 1, 5, 8, 7, 4, 1,
    5, 8, 7, 4, 1, 5, 8, 7, 1, 2, 3, 5, 4, 2, 7 ,8, 9, 8, 7, 8, 4, 6, 1, 2, 1, 2, 4, 5,
    6, 7, 8, 9, 7, 8, 9, 4, 1, 5, 2, 4, 6, 5, 8, 9, 5, 4, 1, 2, 5, 7, 4, 8, 5, 6, 9, 8,
    5, 4, 1, 2, 5, 4, 1, 5, 4, 7, 8, 4, 4, 5, 4, 7, 8, 5, 6, 8, 7, 4, 8, 5, 9, 6, 8, 5,
    7, 4, 8, 5, 8, 7, 4, 5, 1, 2, 1, 4, 5, 7, 4, 1, 3, 2, 5, 6, 9, 8, 7, 4, 1, 5, 8, 7,
    4, 1, 5, 6, 9, 8, 7, 8, 9, 8, 7, 8, 8, 8, 7, 4, 5, 1, 2, 5, 4, 7, 8, 5, 9, 6, 3, 2,
5, 1, 4, 1, 7, 4, 8, 5, 9, 6, 8, 5, 7, 4, 8, 5, 7, 5, 8, 5, 8, 5, 7, 4, 8, 5, 8, 7,
4, 8, 5, 4, 5, 2, 5, 6, 5, 2, 5, 4, 4, 4, 4, 5, 8, 7, 4, 1, 5, 2, 5, 4, 1, 5, 2, 6,
5, 2, 5, 4, 1, 5, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 7, 8, 5, 4, 1, 4, 8, 7, 4, 5, 6, 8,
7, 4, 1, 5, 7, 4, 1, 5, 8, 7, 4, 1, 5, 8, 7, 4, 1, 5, 8, 7, 1, 2, 3, 5, 4, 2, 7, 8,
9, 8, 7, 8, 4, 6, 1, 2];

function nombreDePairs(tab){
    let compteur = 0;
    for (let i=0 ; i<=tab.length-1 ; i+=1){
        if (tab[i]%2==0){
            compteur +=1
        }
    }
    return compteur;
}

function  tousPlusMoinsN(tab , n){
    let nouveauTab = [];
    let pointsAdditiones;

    for (let i = 0 ; i<=tab.length-1 ; i+=1){
        pointsAdditiones = tab[i]+n;
        if (pointsAdditiones<0){
            nouveauTab.push(0);
        }else if (pointsAdditiones>20){
            nouveauTab.push(20);
        }else{
            nouveauTab.push(pointsAdditiones);
        }
    }

    return nouveauTab;
} 

function nombreDesPairsImpairs(tab){
    let compteurPairs=0; let compteursImpairs=0; let newTab=[];
    for (let i=0 ; i<=tab.length-1 ; i+=1){
        if (tab[i]%2 == 0){compteurPairs+=1;}else{compteursImpairs+=1;}
    }
    newTab.push(compteurPairs);
    newTab.push(compteursImpairs);
    return newTab;
}

function analyserNombre(nombre){
    let pairs=0; let impairs=0; let zeros=0;let chaine;
    if (isNaN(nombre)||nombre == Infinity){
        return console.log("-- Ce nombre n'a pas de chiffre ! --");
    }

    chaine = nombre.toString();
    for (let i=0 ; i<= chaine.length-1; i+=1){
        if (chaine[i]==0){
            zeros +=1;
        }else if(chaine[i]%2==0){
            pairs +=1;
        }else if(isNaN(chaine[i])){

        }else if(chaine[i]%2!=0){
            impairs +=1;
        }
    }
    return console.log ("Le nombre "+nombre+" comporte\n "+pairs+" chiffre(s) pair(s),\n "+impairs+" chiffre(s) impair(s) et\n "+zeros+" zéro(s).")
}

function analyserNombre_v2(nombre){
    //à complêter
}


