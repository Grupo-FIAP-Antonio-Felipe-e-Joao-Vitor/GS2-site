import api from "./api"

export async function buscar_dados () {
    
    try {

        const response = await api.get("/sensor")

        return response

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }

}

export async function atualuzar_dados () {
    try {

        const response = await api.post("/sensor")

        return response

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }
}