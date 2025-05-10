const OPTIONS = {
    api: 'https://pokeapi.co/api/v2/pokemon/',
}

const components = {
    button: "Search-button",
    input: "search",
    container: "pokemon-container",
}

document.getElementById(components.button).addEventListener('click', async () => {
    const data = await getPokemonByName(document.getElementById(components.input).value);
    renderPokemon(document.getElementById(components.container), data);  
})

async function getPokemonByName(pokemonName) {
    const response = await fetch(`${OPTIONS.api}${pokemonName}`);
    const data = await response.json();
    return data;
}


function renderPokemon(container, data) {
    const img = document.createElement('img');
    img.src = data.sprites.front_default;

    container.innerHTML = ''; 
    container.appendChild(img); 
}

const button = document.getElementById(components.button);
const input = document.getElementById(components.input);


button.disabled = !input.value.trim();

input.addEventListener('input', () => {
    button.disabled = !input.value.trim();
})