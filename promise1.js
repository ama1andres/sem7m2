const fetch = require('node-fetch');

// pk por id
function fetchPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json());
}

// 3 al mismo tiempo
const pokemonPromises = [fetchPokemon(1), fetchPokemon(4), fetchPokemon(7)];

Promise.all(pokemonPromises)
    .then(results => {
        results.forEach(pokemon => {
            console.log(`Pokemon: ${pokemon.name}`);
        });
    })
    .catch(error => console.log('Error:', error));
