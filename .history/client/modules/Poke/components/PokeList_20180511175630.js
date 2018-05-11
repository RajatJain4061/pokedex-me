import React, { PropTypes } from 'react';

// Import Components
import PokeListItem from './PokeListItem/PokeListItem';

function PokeList(props) {
  return (
    <div className="listView">
      {
        props.pokemons.map(pokemon => (
          <PokeListItem
            pokemon={pokemon}
            key={post.url}
            onView={() => props.handlePokemonView(pokemon.url)}
          />
        ))
      }
    </div>
  );
}

PokeList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  handlePokemonView: PropTypes.func.isRequired,
};

export default PokeList;
