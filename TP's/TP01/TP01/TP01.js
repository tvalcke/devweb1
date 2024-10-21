/* TP01*/  
let ageEtudiant = 18;
console.log(ageEtudiant);
ageEtudiant = 19;
console.log(ageEtudiant);
ageEtudiant = 20;


let largeur = 5;   // Quel est son type ?   //Son type est un nombre

let message = "bonjour"; // Quel est son type ?   //Son type est un string 

let messageErreur = "Il y a une erreur!";
let messageFin = 'Fin du programme';
console.log(messageErreur);
console.log(messageFin);
typeof messageFin; // Quel est son type ?   // Son type est un string
console.log("Fin du programme");
// console.log(Fin du programme); // Que se passe-t-il ?   // Il y a une erreur de syntaxe

let messageAccueil = "Bonjour";
let longueur = 4;
console.log(messageAccueil); // Que se passe-t-il ?   //Ca print Bonjour
console.log(longueur); // Que se passe-t-il ? //Ca print 4
console.log("salut"); // Que se passe-t-il ? Ca print salut
//console.log(salut); // Que se passe-t-il ? //Erreur de syntaxe
console.log('messageAccueil'); // Que se passe-t-il ? Ca print messageAccueil 
typeof messageAccueil; // Quel est son type ? // c'est un string
typeof longueur; // Quel est son type ? // c'est un nombre
typeof "longueur"; // Quel est son type ? c'est un string

"bon" + "jour"; // Résultat ? // Bonjour
"bonjour" + "Albert"; // Résultat ? //bonjourAlbert
"bonjour" + " " + "Albert"; // Résultat ? //bonjour Albert
"bonjour" - "Albert"; // Résultat ? // NaN - Erreur
"bonjour" * "Albert"; // Résultat ? // NaN - Erreur

let messageAccueil = "bonjour";
let nomEtudiant = 'Albert';
console.log(messageAccueil + ' ' + nomEtudiant); // Résultat ? //bonjour albert
console.log("messageAccueil" + ' ' + nomEtudiant); // Résultat ? //bonjour nometudiant

console.log("L'étudiant"); // Résultat ? //L'étudiant
//console.log('L'étudiant'); // Résultat ? //erreur syntaxe                                 - Pas sur
console.log("L\'étudiant"); // Résultat ? //L'étudiant
console.log('L\'étudiant'); // Résultat ? //L'étudiant
let texte = 'il a "tout" réussi'; // Résultat ? //il a "tout" réussi
console.log(texte);

"bonjour" + 1; // Résultat ? bonjour1
"bonjour" + "1"; // Résultat ? // Nan
2 + 2; // Résultat ? // 4
"2" + "2"; // Résultat ? // nan
2 + "2"; // Résultat ? // 22
"2" + 2; // Résultat ? // 22
"bonjour" - 3; // Résultat ? //  Nan
"bonjour" * 3; // Résultat ? //Nan
"bonjour" - "r"; // Résultat ? //Nan

let lengthRectangle;
let widthRectangle;
lengthRectangle = 8;
widthRectangle = 16;
let rectangleArea = lengthRectangle*widthRectangle;
console.log(rectangleArea);

let htvaprice=100;
let withTvaPrice = htvaprice + (htvaprice/100*21);
console.log("Le prix de l'article TVA comprise est de "+withTvaPrice+" €");


let premier = "Nadal";
let second = "Federer";
let memory = premier;

premier = second;
second = memory;                                //Autre moyen ??
console.log(premier);
console.log(second);



let valeur = "18";
console.log(valeur);
typeof valeur;
let resultat = Number(valeur);           // Numner convertis le string en number
console.log(resultat);
console.log(typeof resultat);
resultat = String(resultat);
console.log(resultat);
console.log(typeof resultat);
resultat = Number("184b");
resultat = Number(""); // Attention!

let a = 1/3;
console.log(a); // 0.3333333333333333                    // A retenir !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(a.toFixed(2)); // 0.33
let b = 1.1;
console.log(b.toFixed(2)); // 1.10
console.log((12).toFixed(5)); // 12.00000
let c = a.toFixed(2);
console.log(c); // 0.33
console.log(typeof c); // string 

let valeurIntroduite = prompt("Introduisez une valeur");        // Ici prompt ne fonctionne pas mem avec l'installation ?
console.log(valeurIntroduite);
console.log(typeof valeurIntroduite );
console.log("La valeur introduite est : " + valeurIntroduite);

