import callApi from '../../util/apiCaller';


export function fetchPokemons() {
  return (dispatch) => {
    return callApi('http://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
      // dispatch();
    });
  };
}

export function fetchPokemon(id) {
  return (dispatch) => {
    return callApi(`http://pokeapi.co/api/v2/pokemon/${id}/`).then(res => {
    // dispatch(addPost(res.post));
    });
  };
}
