import callApi from '../../util/apiCaller';


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
