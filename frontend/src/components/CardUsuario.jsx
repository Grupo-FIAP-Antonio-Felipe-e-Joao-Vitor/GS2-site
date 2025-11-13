import { remover_usuario } from "../services/dashboard";

const CardUsuario = ({ usuario, user }) => {

    async function desligar(id) {

        const escolha = confirm("Deseja desligar esse funcionário?")
        if (escolha === true) {

            try {

                const response = remover_usuario(id)

                alert(response.data.message)

            } catch (error) {
                console.log(error);
            }

        }
        if (escolha === false) {
            return
        }

    }

    return (
        <div
            className="bg-gray-300 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border hover:border-blue-600"
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {usuario.nome}
            </h3>
            <p className="text-gray-800 text-sm">{usuario.email}</p>
            <p className="text-gray-800 text-sm font-bold mb-5">
                {usuario.atuacao || "Atuação: N/A"}
            </p>
            {usuario._id !== user._id && (
                <span
                    onClick={() => desligar(usuario._id)}
                    className="px-4 py-1 w-fit h=fit text-black border-2 rounded-lg border-red-500 font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                    Desligar funcionário
                </span>
            )}
        </div>
    )
}

export default CardUsuario