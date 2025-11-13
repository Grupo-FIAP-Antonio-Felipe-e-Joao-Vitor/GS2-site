import axios from "axios";

// Cria instância do axios
const api = axios.create({
    baseURL: "https://gs2-site.onrender.com" // URL base
});

export default api