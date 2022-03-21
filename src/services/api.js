import axios from 'axios';

const api = axios.create({
    // O correto seria este comentado, porém, como é um teste eu irei colocar fixo.
    // baseURL: process.env.REACT_APP_API_URL,

    // Se não tivesse dando o problema de CORs, passaria o site corretamente.
    // baseURL: 'https://cvcbackendhotel.herokuapp.com/hotels/',

    // Como estava com problema de cors, usei o cors-anywhere.
    baseURL: 'https://cors-anywhere.herokuapp.com/https://cvcbackendhotel.herokuapp.com/hotels/',
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default api;