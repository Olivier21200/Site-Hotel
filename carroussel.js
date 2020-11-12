var images = ["calade.jpg","calade2.jpg","fontaine.jpg","lucioles.jpg","myrtes.jpg","oliviers.jpg"]; // tableau des fichiers images
var courante = 0; // indice de l'image courante

/**
 * Fonction qui affiche l'image suivante dans le tableau images
 */
function suivante()
{   
    var img = document.getElementById("photo"); // élément image de la page
    img.src = "carrousel/"+  images[courante]; // change l'image
    courante++; // on augmente l'indice
    if(courante >= images.length) // on vérifie qu'il ne dépasse pas
    {
        courante = 0; // on revient à 0
    }
}

setInterval(suivante,3000); // appelle la fonction toutes les 3000 ms (3s)