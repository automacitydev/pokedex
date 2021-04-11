import {
    GET_POKEMONS_REQUESTED,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILED,
    SET_LOADING_FALSE
} from './types';

import _ from 'lodash';

const initialState = {
    pokemons: [],
    offset: 0,
    selectedPokemonDetails: {},
    isLoading: false,
    hasError: false,
    currentDataLength: 0,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS_REQUESTED:
            return { ...state, isLoading: true }

        case GET_POKEMONS_SUCCESS:
            let currentPokemons = state.pokemons;
            payload.map(pokemon => currentPokemons.push(pokemon));

            const removedDuplicates = _.uniqBy(currentPokemons, function (e) {
                return e.id;
            });

            return {
                ...state,
                isLoading: false,
                pokemons: removedDuplicates,
                offset: state.offset + 1,
                currentDataLength: removedDuplicates.length
            }

        case GET_POKEMONS_FAILED:
            return { ...state, isLoading: false, hasError: true }

        case SET_LOADING_FALSE:
            return { ...state, isLoading: false }

        default:
            return state
    }
}
