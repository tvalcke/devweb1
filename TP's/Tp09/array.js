let tab = ["mot", "concaténer", "chaîne", "caractères", "affichez"];
console.log(tab.join(" "));

let tab2 = [1, 2, 3, 4, 5];
console.log(tab2.join(" - "));

let url = ["https", "www.google.fr", "accueil"];
let newURL = (url.join("/"));
let finaleURL = newURL.replace("https","http:/");
console.log(finaleURL);

let temperatures = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];
let copie = temperatures;

copie= temperatures.slice(1,4);

console.log(copie);