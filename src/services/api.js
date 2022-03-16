import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
    (error) => {
        Promise.reject(error);
        console.log('error', error);
    }
);

export default api;