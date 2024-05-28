const pokemonsContainer = document.querySelector('#pokemons');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createCards(e){
    const card = document.createElement('div');
    const pokemon = document.createElement('img');
    const pokemonName = document.createElement('h2');
    const pokemonContainer = document.createElement('div');
    const abilitiesCont = document.createElement('div');
    const abilityTitle = document.createElement('p');
    const abilityList = document.createElement('ul');
    const buttonMore = document.createElement('button');
    const number = document.createElement('p')
    const headerContainer = document.createElement('div')
    const type = document.createElement('img')
    const pokemonInfo = document.createElement('div')

    card.classList.add('card');
    pokemon.classList.add('pokemon');
    pokemonName.classList.add('pokemonName');
    abilitiesCont.classList.add('abilitiesCont');
    abilityTitle.classList.add('abilityTitle');
    abilityList.classList.add('abilityList');
    buttonMore.classList.add('buttonMore');
    buttonMore.setAttribute('id', 'buttonMore');
    number.classList.add('number');
    headerContainer.classList.add('headerContainer');
    type.classList.add('type');
    pokemonContainer.classList.add('pokemonContainer');
    pokemonInfo.classList.add('pokemonInfo')


    buttonMore.textContent = 'Ver Mas'

    pokemon.src = e.sprites.front_default;
    pokemonName.textContent = e.name.toUpperCase();
    number.textContent = `#${e.id}`;

    const typeName = e.types[0].type.name;
    
    switch(typeName){
        case 'electric':
            type.src = './styles/icons/electric.png'
            break;

        case 'fight':
            type.src = './styles/icons/fight.png'
            break;

        case 'ground':
            type.src = './styles/icons/ground.png'
            break;
                
        case 'normal':
            type.src = './styles/icons/normal.png'
            break;
            
        case 'poison':
            type.src = './styles/icons/poison.png'
            break;
    
        case 'psychic':
            type.src = './styles/icons/psychic.png'
            break;
    
        case 'rock':
            type.src = './styles/icons/rock.png'
            break;
                    
        case 'steel':
            type.src = './styles/icons/steel.png'
            break;
        
        case 'water':
            type.src = './styles/icons/water.png'
            break;
    }

    const totalAbilities = e.abilities;
    totalAbilities.forEach((ab) => {

        const ability = document.createElement('p');
        const abilityElement = document.createElement('li')

        ability.classList.add('ability');
        abilityElement.classList.add('abilityElement');

        ability.textContent = capitalizeFirstLetter(ab.ability.name);
        abilityElement.append(ability)
        abilityList.append(abilityElement);

    })

    abilityTitle.textContent = 'Habilities';

    abilitiesCont.append(abilityTitle, abilityList)
    headerContainer.append(number, type);
    pokemonContainer.append(pokemon)
    pokemonInfo.append(pokemonContainer, pokemonName, abilitiesCont)
    card.append(headerContainer, pokemonInfo, buttonMore)

    abilityList.classList.add('inactive');

    buttonMore.addEventListener('click', () => {
        abilityList.classList.toggle('inactive');
        abilitiesCont.classList.toggle('modify')

        if(buttonMore.textContent === 'Ver Mas'){
            console.log('push')
            buttonMore.textContent = 'Ver Menos'
        } else {
            console.log('push')
            buttonMore.textContent = 'Ver Mas'
        }

        pokemon.classList.toggle('pokemonModify')
        pokemonContainer.classList.toggle('pokemonContainerModify')

    })

    pokemonsContainer.append(card);
}

async function pokemons(i){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();
    createCards(data);
    console.log(data)
}

for(let i = 80; i < 92; i++){
    pokemons(i);
}

searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let pokemonInput = searchInput.value.toLowerCase();

    pokemonsContainer.innerHTML = "";

    searchPokemon(pokemonInput);
})

async function searchPokemon (pokemonSearched) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched}`)
    const data = await response.json()
    createCards(data)
}



