import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2/';

const pokeApi = axios.create({
    baseURL,
    headers: {
        "Cache-Control": "no-cache",
    },
    timeout: 10000,
});

export default pokeApi;
