// At least 1 variable declared using either the const or let keyword.

// At least 1 named function declared, and at least 1 anonymous function 
// or arrow function used.

// At least 1 array and 1 object accessible either within your project code or 
// retrieved from your db.json or external API using the fetch() function.

// Write the code to search for at least 1 element from the DOM, store it into a 
// variable, and change at least 1 property for the element such as textContent or src.

// Write the code to add at least 1 event listener to an element, to make the 
// element listen for an event such as click or submit and execute code in response to the event.

// Write the code to call the fetch() function to make a GET request to a
//  server (either db.json server or external API) to retrieve data from the server.


const displayPokemon = () => {
    fetch('http://localhost:3000/pokemon')
        .then(response => response.json())
        .then(poke => {
            poke.forEach(pokemon => {
                const pokeImageElement = document.createElement('img')
                pokeImageElement.src = pokemon.image

                const picture = document.getElementById('pokemon-picture')
                picture.appendChild(pokeImageElement)
            })
        })
        .catch(error => console.error('Error fetching Pokemon data:', error));
};

document.addEventListener('DOMContentLoaded', displayPokemon);