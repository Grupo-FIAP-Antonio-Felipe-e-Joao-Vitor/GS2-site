import api from "./api";

export async function post_health_form (data) {

    try {

        const response = await api.post("/analises", data);

        return response;

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }

}

export async function salvar_recomendacoes (data, id) {
    
    try {

        const response = await api.put(`/usuarios/${id}`, data);

        return response;

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }
}