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

// Get pokemon by id
export const getPokemon = (state, id) => state.pokemons.data.filter(post => post.id === id)[0];

// Export Reducer
export default PokeReducer;
