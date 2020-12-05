const base = document.querySelector('#base')
const height1 = document.querySelector('#height')
const picture = document.querySelector('#picture')

for (let element of document.querySelectorAll("button")) {
  element.addEventListener('click', getPokemon)
}


async function getPokemon(event) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.textContent.toLowerCase()}`)
  const data = await response.json()
  base.textContent = `starting level = ${data.base_experience}`
  height1.textContent = `height = ${data.height}`
  picture.src = data.sprites.front_shiny
}