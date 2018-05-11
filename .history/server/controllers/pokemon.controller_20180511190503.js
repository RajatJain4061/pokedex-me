import sanitizeHtml from 'sanitize-html';

/**
 * Get all pokemons
 * @param req
 * @param res
 * @returns void
 */
export function getPokemons(req, res) {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(resp => resp.json()).then(response => {
    res.json({ species: response.results.species });
  });
}

/**
 * Get a single pokemon
 * @param req
 * @param res
 * @returns void
 */
export function getPokemon(req, res) {
  fetch("https://pokeapi.co/api/v2/pokemon/${req.params.id}/").then(resp => resp.json()).then(response => {
    res.json({ pokemon: response.results.species });
  });
}
