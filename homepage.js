// var testHeading = document.getElementById('test');

// var apiUrl = 'https://pokeapi.co/api/v2/type/3';

// function getOnePokemon(url) {
//     fetch(url)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data)
//         })
//         .catch(function(error) {
//             console.error(error)
//         });
// }

// fetch(apiUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);

//         for (var i = 0; i < data.pokemon.length; i++) {
//             var pokemon = data.pokemon[i].pokemon.name;
//             var pokemonList = document.createElement('li');
//             pokemonList.innerHTML = pokemon;
//             testHeading.appendChild(pokemonList);
//         }

//         getOnePokemon(data.pokemon[0].pokemon.url)
//     })
//     .catch(function(error) {
//         console.error(error);
//     });