import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PokeList from '../../components/PokeList';

// Import Actions
import { fetchPokemons } from '../../PokeActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
import { getPokemons } from '../../PokeReducer';

class PokeListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemons());
  }

  handlePokemonView = pokemon => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      // this.props.dispatch(deletePostRequest(post));
    }
  };

  render() {
    return (
      <div>
        <PokeList handlePokemonView={this.handlePokemonView} pokemons={this.props.pokemons} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PokeListPage.need = [() => { return fetchPokemons(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    pokemons: getPokemons(state),
  };
}

PokeListPage.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

PokeListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PokeListPage);
