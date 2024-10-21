let kilometrage = [];

function ajouterKilometrage(kilometrage) {
    let kilometrageEntre = Number(prompt("Entrez un kilométrage :"));

    if (isNaN(kilometrageEntre) || kilometrageEntre <= 0) {
    } else if (kilometrage.length === 0 || kilometrageEntre > kilometrage[kilometrage.length - 1]) {
        kilometrage.push(kilometrageEntre);
    }
    return( kilometrage);
}
