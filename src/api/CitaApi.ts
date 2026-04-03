import axios from "axios";

const API_URL = "http://localhost:8080/api/citas";

export const crearCita = async (data: any) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const getCitasPorGestor = async (gestorId: number) => {
    const response = await axios.get(`${API_URL}/gestor/${gestorId}`);
    return response.data;
};
export const confirmarCita = async (id: number) => {
    const response = await axios.put(`${API_URL}/${id}/confirmar`);
    return response.data;
};


export const eliminarCita = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
