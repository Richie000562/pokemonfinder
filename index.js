const OPTIONS = {
    api : 'https://pokeapi.co/api/v2/pokemon/'
}

const components = {
    button : "Search-button",
    input : "search",
    container : "pokemon-container"

    
}

document.getElementById(components.button).addEventListener('click',async() => {
   const data = await getPokemonByName(document.getElementById(components.input).value)
   createPokemonImage(data)
})



async function getPokemonByName(pokemonName) {
   const response =  await fetch(`${OPTIONS.api}${pokemonName}`)
   const data = await response.json()
    return data;


}

function createPokemonImage(data){
    const pokemonImg =data.sprites.front_default
    const image = document.createElement('img')
     image.src = pokemonImg
     document.getElementById(components.container).append(image)
   }
