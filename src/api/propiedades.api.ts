import axios from "axios";

const API_URL = "http://localhost:8080/api/propiedades";

export const getPropiedades = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
export const updatePropiedad = async (id: number, data: any) => {
    return axios.put(`${API_URL}/${id}`, data);
};
