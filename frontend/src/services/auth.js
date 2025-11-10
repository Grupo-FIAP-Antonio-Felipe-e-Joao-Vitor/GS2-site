import api from "./api";

export async function login(data) {

    try {

        const response = await api.post("/login", data)

        const token = response.data.token;
        const user = response.data.user;

        if (token && user) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        }


        return response;

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }

};

export async function cadastro(data) {

    try {

        const response = await api.post("/register", data);

        return response;

    } catch (error) {

        if (error.response) {

            if (error.response) return error.response;

            else return console.log(error);

        }

    }

}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};