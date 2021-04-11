import {
    GET_POKEMONS_REQUESTED,
} from './types';

export const getPokemons = (payload) => ({
    type: GET_POKEMONS_REQUESTED,
    payload
});

