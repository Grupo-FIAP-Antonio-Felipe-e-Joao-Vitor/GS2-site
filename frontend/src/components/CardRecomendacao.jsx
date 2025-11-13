const CardRecomendacao = ({ recomendacao }) => {
    return (
        <div
            className="bg-gray-400 border border-gray-200 hover:border-purple-600 transition-all duration-300 p-6 rounded-2xl shadow-md hover:shadow-lg"
        >
            <p className="text-gray-800 text-xl font-semibold leading-relaxed">
                {recomendacao}
            </p>
        </div>
    )
}

export default CardRecomendacao