import axios from 'axios';

const api = axios.create({
    // O correto seria este comentado, porém, como é um teste eu irei colocar fixo.
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: 'https://cvcbackendhotel.herokuapp.com/hotels/'
});

api.interceptors.request.use(
    (error) => {
        Promise.reject(error);
        console.log('error', error);
    }
);

export default api;