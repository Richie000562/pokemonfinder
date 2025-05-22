const OPTIONS = {
  api: "https://pokeapi.co/api/v2/pokemon/",
};

const components = {
  button: "search-button",
  input: "search",
  container: "pokemon-container",
};

const button = document.getElementById(components.button);
const input = document.getElementById(components.input);

button.disabled = !input.value.trim();

input.addEventListener("input", () => {
  button.disabled = !input.value.trim();
});

button.addEventListener("click", async () => {
  const value = input.value.trim().toLowerCase();
  const container = document.getElementById(components.container);

  if (/^\d+$/.test(value)) {
    const id = parseInt(value, 10);
    if (id < 1 || id > 9999) {
      alert("Adj meg egy számot 1 és 9999 között!");
      return;
    }
    try {
      const data = await getPokemonByName(id);
      createPokemonCard(container, data);
    } catch {
      alert("Nem található ilyen Pokémon ID.");
    }
  } else {
    try {
      const data = await getPokemonByName(value);
      createPokemonCard(container, data);
    } catch {
      alert("Nem található ilyen Pokémon név.");
    }
  }
});

async function getPokemonByName(nameOrId) {
  const res = await fetch(`${OPTIONS.api}${nameOrId}`);
  if (!res.ok) throw new Error("Nem található");
  return res.json();
}

function createPokemonCard(container, data) {
  const card = document.createElement("div");
  card.className = "pokemon-card";

  const img = document.createElement("img");
  img.src = data.sprites.front_default || "";
  img.alt = data.name;

  const name = document.createElement("h2");
  name.textContent = data.name;

  card.appendChild(img);
  card.appendChild(name);
  container.appendChild(card);

  // Ha több mint 5 elem van, töröljük az elsőt (legrégebbit)
  while (container.children.length > 5) {
    container.removeChild(container.children[0]);
  }
}

