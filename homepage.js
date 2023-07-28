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


      function getPokemonData() {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Pokémon not found!');
            }
            return response.json();
          })
          .then(data => {
            displayPokemonData(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('pokemonInfo').innerHTML = 'Pokémon not found!';
          });
      }
  
      function displayPokemonData(data) {
        const pokemonInfoDiv = document.getElementById('pokemonInfo');
        const pokemonName = data.name.toUpperCase();
        const pokemonID = data.id;
        const pokemonTypes = data.types.map(type => type.type.name).join(', ');
        const pokemonAbility = data.abilities[0].ability.name;
        const pokemonPictureUrl = data.sprites.front_default;
  
        const infoHTML = `
          <h2>${pokemonName}</h2>
          <p>ID: ${pokemonID}</p>
          <p>Type: ${pokemonTypes}</p>
          <p>Ability: ${pokemonAbility}</p>
          <img src="${pokemonPictureUrl}" alt="${pokemonName} Picture">
        `;
  
        pokemonInfoDiv.innerHTML = infoHTML;
      }
    
    
      
      document.addEventListener('DOMContentLoaded', () => {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'; // Limiting to the first 151 Pokémon
    
        // Fetch the list of Pokémon names from the PokeAPI
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch Pokémon data.');
            }
            return response.json();
          })
          .then(data => {
            const pokemonDropdown = document.getElementById('pokemonDropdown');
    
            // Create an option element for each Pokémon name and add it to the dropdown
            data.results.forEach(pokemon => {
              const option = document.createElement('option');
              option.textContent = capitalizeFirstLetter(pokemon.name);
              option.value = pokemon.name;
              pokemonDropdown.appendChild(option);
            });
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch Pokémon data.');
          });
    
        // Helper function to capitalize the first letter of a string
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
      });
    