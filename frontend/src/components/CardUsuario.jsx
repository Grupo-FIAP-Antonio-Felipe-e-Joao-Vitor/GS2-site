const CardUsuario = ({ usuario }) => {
    return (
        <div
            className="bg-gray-300 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border hover:border-blue-600"
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {usuario.nome}
            </h3>
            <p className="text-gray-800 text-sm">{usuario.email}</p>
            <p className="text-gray-800 text-sm font-bold">
                {usuario.atuacao || "Atuação: N/A"}
            </p>
        </div>
    )
}

export default CardUsuario