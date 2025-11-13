import api from "./api";

export async function listar_usuarios_empresa (empresa) {

    try {

        const response = await api.get(`/usuarios/empresa/${empresa}`);

        return response;

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }
}

export async function listar_analises (empresa, atuacao) {
    try {

        const response = await api.get(`/analises/${empresa}/search?atuacao=${atuacao}`);

        return response;

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }
}