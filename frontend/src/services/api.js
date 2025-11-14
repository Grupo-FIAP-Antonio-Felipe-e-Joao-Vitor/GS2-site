import axios from "axios";

// URL localhost do backend
const URL_local = "http://localhost:3000"

// URL hospedado do backend
const URL_render = "https://gs2-site.onrender.com"

// Cria instância do axios
const api = axios.create({
    baseURL: URL_render // URL base
});

export default api