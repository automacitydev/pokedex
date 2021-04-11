import POKEAPI from './index';

export const getPokemons = (offset = 1) => {
    try {
        return POKEAPI.get(`pokemon/?limit=5&offset=${offset}`)
    } catch (e) {
        return Promise.reject(e)
    }
}