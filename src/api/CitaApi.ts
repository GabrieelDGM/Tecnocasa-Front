import axios from "axios";

const API_URL = "http://localhost:8080/api/citas";

export const crearCita = async (data: any) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};
