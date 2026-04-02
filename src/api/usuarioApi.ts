import api from "./axiosConfig";

// LOGIN
export const loginUsuario = async (usuario: string, contrasena: string) => {
  const response = await api.post("/usuarios/login", {
    usuario,
    contrasena,
  });
  return response.data;
};

// REGISTRO
export const registerUsuario = async (data: any) => {
  const response = await api.post("/usuarios", data);
  return response.data;
};




