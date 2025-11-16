const CardRecomendacao = ({ recomendacao }) => {
    return (
        <div
            className="bg-gray-300 border border-gray-200 hover:border-blue-600 transition-all duration-300 p-5 ml-5 rounded-2xl shadow-md hover:shadow-lg"
        >
            <p className="text-gray-800 text-xl font-semibold leading-relaxed">
                {recomendacao}
            </p>
        </div>
    )
}

export default CardRecomendacao