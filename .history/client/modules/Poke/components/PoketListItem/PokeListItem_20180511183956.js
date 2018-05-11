import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PokeListItem.css';

function PokeListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`${props.pokemon.url}`} >
          {props.pokemon.name}
        </Link>
      </h3>
      <p className={styles['post-action']}><a href="#" onClick={props.onView}><FormattedMessage id="viewPokemon" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

PokeListItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onView: PropTypes.func.isRequired,
};

export default PokeListItem;
