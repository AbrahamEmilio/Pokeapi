const pokemonsContainer = document.querySelector('#pokemons');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

function pokemons(i){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json())
    .then((e) => {

        const card = document.createElement('div');
        const pokemon = document.createElement('img');
        const pokemonName = document.createElement('h2');
        const abilitiesCont = document.createElement('div');
        const abilityTitle = document.createElement('p');
        const abilityList = document.createElement('ul');
        const closed = document.createElement('img');

        card.classList.add('card');
        pokemon.classList.add('pokemon');
        pokemonName.classList.add('pokemonName');
        abilitiesCont.classList.add('abilitiesCont');
        abilityTitle.classList.add('abilityTitle');
        abilityList.classList.add('abilityList');
        closed.classList.add('closed')


        pokemon.src = e.sprites.front_default;
        pokemonName.textContent = e.name;

        const totalAbilities = e.abilities;
        totalAbilities.forEach((ab) => {

            console.log(ab.ability.name)

            const ability = document.createElement('p');
            const abilityElement = document.createElement('li')

            ability.classList.add('ability');
            abilityElement.classList.add('abilityElement');

            ability.textContent = ab.ability.name;
            abilityElement.append(ability)
            abilityList.append(abilityElement);

        })

        abilityTitle.textContent = 'Habilities';

        abilitiesCont.append(abilityTitle, abilityList)
        card.append(closed, pokemon, pokemonName, abilitiesCont)

        closed.classList.add('inactive');
        //pokemonName.classList.add('inactive');
        abilitiesCont.classList.add('inactive');

        pokemon.addEventListener('click', () => {
            closed.classList.toggle('inactive');
            pokemonName.classList.toggle('inactive');
            abilitiesCont.classList.toggle('inactive');
        })

        pokemonsContainer.append(card);

    })
}

searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let pokemonInput = searchInput.value.toLowerCase();

    pokemonsContainer.innerHTML = "";

    searchPokemon(pokemonInput);
})

for(let i = 80; i < 92; i++){
    pokemons(i);
}

function searchPokemon (pokemonSearched) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched}`)
    .then((res) => res.json())
    .then((data) => {
        
        console.log(data)

        const card = document.createElement('div');
        const pokemon = document.createElement('img');
        const pokemonName = document.createElement('h2');
        const abilitiesCont = document.createElement('div');
        const abilityTitle = document.createElement('p');
        const abilityList = document.createElement('ul');
        const closed = document.createElement('img');

        card.classList.add('card');
        pokemon.classList.add('pokemon');
        pokemonName.classList.add('pokemonName');
        abilitiesCont.classList.add('abilitiesCont');
        abilityTitle.classList.add('abilityTitle');
        abilityList.classList.add('abilityList');
        closed.classList.add('closed')


        pokemon.src = data.sprites.front_default;
        pokemonName.textContent = data.name;

        const totalAbilities = data.abilities;
        totalAbilities.forEach((ab) => {

            console.log(ab.ability.name)

            const ability = document.createElement('p');
            const abilityElement = document.createElement('li')

            ability.classList.add('ability');
            abilityElement.classList.add('abilityElement');

            ability.textContent = ab.ability.name;
            abilityElement.append(ability)
            abilityList.append(abilityElement);

        })

        abilityTitle.textContent = 'Habilities';

        abilitiesCont.append(abilityTitle, abilityList)
        card.append(closed, pokemon, pokemonName, abilitiesCont)

        closed.classList.add('inactive');
        //pokemonName.classList.add('inactive');
        abilitiesCont.classList.add('inactive');

        pokemon.addEventListener('click', () => {
            closed.classList.toggle('inactive');
            pokemonName.classList.toggle('inactive');
            abilitiesCont.classList.toggle('inactive');
        })

        pokemonsContainer.append(card);
    })
}
