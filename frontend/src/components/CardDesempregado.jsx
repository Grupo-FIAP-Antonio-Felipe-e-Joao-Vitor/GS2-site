const CardDesempregado = ({ setOpen, setSelected, desempregado }) => {
    return (
        <div
            onClick={() => {
                setOpen(true)
                setSelected(desempregado)
            }}
            className="relative w-full md:w-56 h-96 group rounded-lg border-2 border-gray-500 hover:border-gray-100">
            <div className="absolute z-10 w-full h-full md:bg-black md:opacity-20 cursor-pointer group-hover:opacity-10 transition-all duration-300"></div>
            <img src={desempregado.foto} className="w-full h-full rounded-lg object-center object-cover" alt={desempregado.nome} />
            <div className="max-md:flex flex-col md:hidden px-2 py-1 absolute bottom-0 bg-black w-full md:opacity-70 h-fit md:h-0 group-hover:flex group-hover:h-fit z-20 transition-all duration-300">

                <span className="text-xl font-bold text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">{desempregado.nome}</span>

                <span className="text-lg font-extrabold text-gray-400 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {desempregado.cargo}
                </span>

            </div>
        </div>
    )
}

export default CardDesempregado