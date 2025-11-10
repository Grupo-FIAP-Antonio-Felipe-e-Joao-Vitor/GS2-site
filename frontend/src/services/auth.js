import api from "./api";

export async function login (data) {
    
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
            
            if (error.response.status === 400) return error.response;

            if (error.response.status === 401) return error.response;

            if (error.response.status === 500) return error.response;

            else return console.log(error);

        }

    }
    
};