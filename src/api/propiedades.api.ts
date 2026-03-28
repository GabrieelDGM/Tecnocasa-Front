import api from "./api";

export const obtenerPropiedades = async () => {
    const res = await api.get("/propiedades");
    return res.data;
};