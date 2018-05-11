import { ADD_POKEMON, ADD_POKEMONS} from './PokeActions';

// Initial State
const initialState = { data: [] };

const PokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON :
      return {
        data: [action.pokemon, ...state.data],
      };

    case ADD_POKEMONS :
      return {
        data: action.pokemons,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all pokemons
export const getPokemons = state => state.pokemons.data;

// Get pokemon by url
export const getPokemon = (state, url) => state.pokemons.data.filter(pokemon => pokemon.url === url)[0];

// Export Reducer
export default PokeReducer;pokemon
