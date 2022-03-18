import api from "../services/api";

export const getAllData = async (city_id: number) => {
    let response;
    try {
        response = await api.get(`avail/${city_id}`);
        if (response.status !== 200) throw new Error('Erro ao exibir');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getSingle = async (hotel_id: number | string | undefined) => {
    let response;
    try {
        response = await api.get(`/${hotel_id}`);
        if (response.status !== 200) throw new Error('Erro ao exibir');
        return response.data[0];
    } catch (error) {
        console.log('error getSingle', error);
        return Promise.reject(error);
    }
};