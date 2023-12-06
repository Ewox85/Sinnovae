function myFunction() {
    var tableReduit = document.getElementById("tableReduit");
    var fleche = document.getElementById("fleche");
    if (tableReduit.style.display === "none") {
        tableReduit.style.display = "";
        fleche.innerHTML = "▼";
    } else {
        tableReduit.style.display = "none";
        fleche.innerHTML = "▲";
    }
}

function choisirPokemonAleatoire() {
    // Génère un index aléatoire dans la plage de la liste des Pokémon
    const index = Math.floor(Math.random() * pokemonList.length);
    
    // Récupère le nom et le numéro du Pokémon correspondant à l'index
    const pokemon = pokemonList[index];

    // Construit le nom du fichier image en utilisant le nom et le numéro du Pokémon
    const pokemonImage = `${pokemon.name}.png`;
    const pokemonNumero = `${pokemon.numero}`;

    // Extraire le nom du Pokémon sans l'extension .png, le trait d'union et le numéro
    let pokemonNom = pokemon.name.replace(/_/g, ' ');

    // Met la première lettre en majuscule et concatène le reste en minuscules
    pokemonNom = pokemonNom.charAt(0).toUpperCase() + pokemonNom.slice(1);

    // Construit le chemin complet vers l'image
    const imagePath = "../Images/shiny/" + pokemonImage;

    // Sélectionne l'élément image existant et met à jour sa source
    const imageElement = document.querySelector("#pokemonImage");
    imageElement.src = imagePath;
    imageElement.alt = "Pokémon Shiny";

    // Sélectionne l'élément texte à côté de l'image et met à jour son contenu
    const nameElement = document.querySelector("#pokemonName");
    nameElement.textContent = "Pokémon choisi : " + pokemonNom + " #"+pokemonNumero;
}