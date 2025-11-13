const GraficoDonout = ({ numero }) => {
    return (
        <div className="w-64 h-64 flex justify-center items-center border-[30px] border-blue-400 rounded-full">
            <span className="text-6xl text-gray-400">{numero}</span>
        </div>
    )
}

export default GraficoDonout