// ChL@2014    YD@2016
//
// utilitaire : fonction comparatrice d'articles
function cmpArt(x,y) {
  if(x.lib > y.lib) return +1; 
  if(x.lib < y.lib) return -1; 
  return 0;
}
// utilitaire : générer un élément de liste <select> avec une classe cl
function mkOpt(x, cl){  // makeOption
  if (cl) return '<option class=' + cl + '>' + x + '</option>\n';
  return '<option>' + x + '</option>\n';
}
// utilitaire : générer un élément de table <td> avec une classe cl
function mkTd(x, cl){  //makeTd
  if (cl) return '<td class=' + cl + '>' + x + '</td>';
  return '<td>' + x + '</td>';
}
// utilitaire : générer un élément de table <tr> avec une classe cl
function mkTr(x, cl){  //makeTr
  if (cl) return '<tr class=' + cl + '>' + x + '</tr>\n';  
  return '<tr>' + x + '</tr>\n';
}
// ------------------------------------------------------------------
function trieObjet(objet){
  Object.keys(objet).sort().forEach(function(key) {
    var value = objet[key];
    console.log(key, value);
  });
}

function convertirEnatbleauDObjet(objet){
  var tableau = [];
  for(var i in objet){
    tableau.push({lib: i, prix: objet[i]});
  }
  objet = tableau;
  console.log(tableau);
  return tableau;
}

function initPage(){ // au chargement de la page
  fruits = convertirEnatbleauDObjet(articles.fruits);
  legumes = convertirEnatbleauDObjet(articles.legumes);
  // trie les tableaux
  fruits.sort(cmpArt);
  legumes.sort(cmpArt);    
  //trieObjet(fruits);
  //trieObjet(legumes);
  setSelect(fruits);                // affiche la liste      
  setElem('tot', total.toFixed(2)); // affiche le total (0))
}

function setSelect(t) { // affiche les listes <select> à partir du tableau t
  setElem('listeGauche', t.map(function(x) {return mkOpt(x.lib);}).join(''));
  setElem('listeDroite', t.map(function(x) {return mkOpt(x.prix.toFixed(2));}).join(''));
  document.frm.listeGauche.size = t.length;     // redimensionner gauche
  document.frm.listeDroite.size = t.length;     // redimensionner droite
  document.frm.listeGauche.selectedIndex = -1;  // désélectionner gauche
  document.frm.listeDroite.selectedIndex = -1;  // désélectionne droite   
}
    
function choix(r){ // selon le choix via bouton-radio r, fabrique la liste demandée
  setSelect((r.value == 'F') ? fruits : legumes);
}

function synchro(s){ // syncronise les deux listes sur clic
  s.form.listeDroite.selectedIndex = s.selectedIndex; 
  s.form.listeGauche.selectedIndex  = s.selectedIndex;
}

function index(f) { // cherche si l'aliment f se trouve dans la commande
  for(var i in commande) {
    if (commande[i].lib == f){ return i; } // oui, donner l'indice
  }
  return -1; // non
}

function ajouter(frm){ // ajouter l'aliment choisi à la commande
  var f = frm.listeGauche.value;  // aliment
  var p = +frm.listeDroite.value; // prix      
  var q = +frm.qte.value;         // quantité
  var i = index(f);               // cherche l'aliment dans la commande              
  if (i == -1) {                        // pas trouvé ?
    var o = {lib: f, prix: p, qte: q};     // on fabrique la ligne de commande
    commande.push(o);                      // et on l'ajoute
  }
  else {                                // trouvé ?
    commande[i].qte += q;                  // on met à jour la quantité
  }
  total += p * q;                 // ajuster total à payer
  dessinerCommande();             // redessiner la table de commande dans la page
  frm.qte.value = '';             // vider champ de saisie
  return false;         // bloquer formulaire !
}

function enlever(e){ // enlever l'aliment choisi
  var f = e.form.listeGauche.value;  // aliment
  var i = index(f);               // cherche l'aliment dans la commande
  if (i != -1) {                  // trouvé ?
    total -= commande[i].qte * commande[i].prix; // décompter du total
    commande.splice(i, 1);                       // enlever
    dessinerCommande();                          // redessiner commande
  }  
}

function dessinerCommande(){ // dessiner la table de commande
  commande.sort(cmpArt)      // trier la commande sur libellé
  var s = '';
  for(var i in commande) {  // chaque ligne de commande
    s += mkTr( mkTd(commande[i].lib) 
             + mkTd(commande[i].prix.toFixed(2), 'prix')                    // class prix au cas où mise en forme différente
             + mkTd(commande[i].qte.toFixed(3), 'qte')                      // class qte idem
             + mkTd((commande[i].prix * commande[i].qte).toFixed(2), 'mnt') // class mnt idem
         ); // une ligne de table html
  }
  setElem('tb', s);                 // afficher commande
  setElem('tot', total.toFixed(2)); // afficher le prix
  document.frm.listeGauche.selectedIndex = -1;  // désélectionner liste gauche
  document.frm.listeDroite.selectedIndex = -1;  // désélectionner liste droite
  document.frm.print.disabled = Boolean(!total) ;
}

function raz(){ // remise à zéro de tout 
  commande = []; // commande
  total = 0;     // total
  setElem('tb', '');                // vider table de commande dans la page
  setElem('tot', total.toFixed(2)); // afficher le total (0))
  setElem('bar', '');               // vider code-barres
  setSelect(fruits);                // afiche la liste des fruits 
}

function imprimer(){ // obtenir et dessiner code-barres
  if(!total) return;  // pas de commande ?  sortir !  - pas utile si utilisation du disabled du bouton
  setElem('bar', DrawHTMLBarcode_Code39(getElem('tot'),
                                        1, 'yes', 'cm',
                                        7, 7, 2, 3,
                                        'bottom', 'center', '',
                                        'black', 'white')
          );      // code-barres via API
  var d =new Date(); // et la date !      
  setElem('dte', d.toLocaleString());    
  window.print(); // appeler prévisualisation
}