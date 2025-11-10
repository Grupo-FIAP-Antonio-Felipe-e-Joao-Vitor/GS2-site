import axios from "axios";

// Cria instância do axios
const api = axios.create({
    baseURL: "http://localhost:3000" // URL base
});

export default api