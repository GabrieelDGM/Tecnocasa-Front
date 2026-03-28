import axios from "axios";


// Aqui va la conexion a la api cuando la tengamos creada... 
// cuando tengamos la URL de back bien creada la colocamos aqui...
const api = axios.create({
    baseURL: "http://TU_IP_O_DOMINIO:3000/api", 
    timeout: 5000,
});

export default api;
