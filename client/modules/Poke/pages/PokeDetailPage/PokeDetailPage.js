import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PokeListItem/PokeListItem.css';

// Import Actions
import { fetchPokemon } from '../../PokeActions';

// Import Selectors
import { getPokemon } from '../../PokeReducer';

export function PokeDetailPage(props) {
  return (
    <div>
      <Helmet title={props.pokemon.name} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.pokemon.name}</h3>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
PokeDetailPage.need = [params => {
  return fetchPokemon(params.id);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    pokemon: getPokemon(state, props.params.id),
  };
}

PokeDetailPage.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PokeDetailPage);
