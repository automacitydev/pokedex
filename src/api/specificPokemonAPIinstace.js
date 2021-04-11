import axios from "axios";

const pokeAPI = axios.create({
    headers: {
        "Cache-Control": "no-cache",
    },
    timeout: 10000,
});

pokeAPI.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

pokeAPI.interceptors.response.use(
    async (config) => {
        const { abilities, sprites, stats, name, id, types } = config.data;

        return {
            abilities,
            sprites,
            stats,
            name,
            id,
            types
        };
    },
    async function (error) {
        return Promise.reject(error);
    },
);

export default pokeAPI;
