import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POKEMON = 'ADD_POST';
export const ADD_POKEMONS = 'ADD_POKEMONS';

// Export Actions
export function addPokemon(pokemon) {
  return {
    type: ADD_POKEMON,
    pokemon,
  };
}

export function addPokemons(pokemons) {
  return {
    type: ADD_POKEMONS,
    pokemons,
  };
}
export function fetchPokemons() {
  return (dispatch) => {
    return callApi('pokemons').then(res => {
      dispatch(addPokemons(res.pokemons));
    });
  };
}

export function fetchPokemon(id) {
  return (dispatch) => {
    return callApi(`pokemons/${id}`).then(res => dispatch(addPokemon(res.pokemon)));
  };
}
