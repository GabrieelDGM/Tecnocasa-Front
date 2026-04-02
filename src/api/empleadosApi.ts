import api from "./axiosConfig";

// LOGIN empleado
export const loginEmpleado = async (usuario: string, contrasena: string) => {
    const response = await api.post("/empleados/login", {
        usuario,
        contrasena,
    });
    return response.data;
};