const OPTIONS = {
  api: "https://pokeapi.co/api/v2/pokemon/",
};

const components = {
  button: "Search-button",
  input: "search",
  container: "pokemon-container",
};

document
  .getElementById(components.button)
  .addEventListener("click", async () => {
    const data = await getPokemonByName(
      document.getElementById(components.input).value
    );
    renderPokemon(document.getElementById(components.container), data);
    console.log(data)

  });

async function getPokemonByName(pokemonName) {
  return (await fetch(`${OPTIONS.api}${pokemonName}`)).json();
}

function renderPokemon(container, data) {
  const img = document.createElement("img");
  img.src = data.sprites.front_default;

  container.innerHTML = "";
  container.appendChild(img);
  container.appendChild(p)
}

const button = document.getElementById(components.button);
const input = document.getElementById(components.input);

button.disabled = !input.value.trim();

input.addEventListener("input", () => {
  button.disabled = !input.value.trim();
});

