const CardPontos = ({ ponto }) => {
    return (
        <div
            className="bg-gray-400 border border-gray-200 hover:border-blue-600 transition-all duration-300 p-6 rounded-2xl shadow-md hover:shadow-lg"
        >
            <p className="text-gray-800 text-xl font-semibold leading-relaxed">
                {ponto}
            </p>
        </div>
    )
}

export default CardPontos