// Saga
import { put, takeLatest, select, call, all } from "redux-saga/effects";

// Types
import {
    GET_POKEMONS_REQUESTED,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILED,
    SET_LOADING_FALSE
} from './types';

// Services
import {
    getPokemons as fnGetPokemons,
} from "../api/services";

// API
import pokeAPI from '../api/specificPokemonAPIinstace';

// Helpers
import {
    getAbilities,
    getImages,
    getNames,
    getStats,
    getIds,
    getTypes
} from './helpers';

const getSpecificPokemon = (url) => pokeAPI.get(url);
const getOffset = state => state.offset;
const getDataLength = state => state.currentDataLength;

export function* getPokemons() {
    try {
        const dataLength = yield select(getDataLength);

        if (dataLength >= 20) {
            yield put({ type: SET_LOADING_FALSE })
            return;
        }

        const offset = yield select(getOffset);
        const { data } = yield call(fnGetPokemons, offset)

        const URLs = data.results.map(item => item.url);

        const res = yield all(
            URLs.map(url =>
                call(getSpecificPokemon, url)
            )
        )

        const abilities = getAbilities(res);
        const imgs = getImages(res);
        const names = getNames(res);
        const stats = getStats(res);
        const ids = getIds(res);
        const types = getTypes(res);

        // build object from different objects
        let pokemons = [];
        const maxLength = abilities.length;

        for (let i = 0; i < maxLength; i++) {
            pokemons.push({
                abilities: abilities[i],
                img: imgs[i],
                name: names[i],
                stats: stats[i],
                id: ids[i],
                type: types[i]
            })
        }

        yield put({ type: GET_POKEMONS_SUCCESS, payload: pokemons })
    }

    catch (e) {
        console.log('error at getPokemons: ', e);

        yield put({ type: GET_POKEMONS_FAILED })
    }
}

export default function* watcher() {
    yield takeLatest(GET_POKEMONS_REQUESTED, getPokemons);
}
