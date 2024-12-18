const fetch = require('node-fetch');

function fetchPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json());
}

// pk resuleto
const pokemonPromises = [fetchPokemon(1), fetchPokemon(4), fetchPokemon(7)];

Promise.any(pokemonPromises)
    .then(pokemon => {
        console.log(`First Pokemon resolved: ${pokemon.name}`);
    })
    .catch(error => console.log('Error:', error));
