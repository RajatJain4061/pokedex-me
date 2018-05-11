import React, { PropTypes } from 'react';

// Import Components
import PokeListItem from './PokeListItem/PokeListItem';

function PokeList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PokeListItem
            post={post}
            key={post.cuid}
            onView={() => props.handlePokemonView(pokemon.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
