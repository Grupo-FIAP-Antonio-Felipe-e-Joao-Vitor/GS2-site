const CardDesempregado = ({ setOpen, setSelected, desempregado }) => {
  const handleClick = () => {
    setSelected(desempregado);
    setOpen(true);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer w-full md:w-auto h-96 rounded-lg border-2 border-gray-600 hover:border-gray-200 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg group"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10"></div>

      {/* Imagem */}
      <img
        src={desempregado.foto}
        className="w-full h-full object-cover object-center"
        alt={desempregado.nome}
      />

      {/* Conteúdo */}
      <div className="absolute bottom-0 w-full z-20 bg-black/80 backdrop-blur-sm border-t border-gray-500 px-3 py-2 flex flex-col gap-1">
        <span className="text-xl font-bold text-white">
          {desempregado.nome}
        </span>

        <span className="text-md font-semibold text-gray-300">
          {desempregado.cargo}
        </span>

        <div className="pt-1 border-t border-gray-700 flex flex-wrap gap-1 text-sm text-gray-400">
          {desempregado.habilidadesTecnicas.map((h, i) => (
            <span
              key={i}
              className="bg-gray-800/60 px-2 py-0.5 rounded-md text-xs"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDesempregado;
