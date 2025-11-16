import Modal from "./Modal";

const FiltroModal = ({ setOpenFiltro, filtro, setFiltro }) => {
  const tecnologias = ["Python", "Django", "PostgreSQL", "JavaScript", "Docker", "AWS", "Figma", "Design System", "Pesquisa de usuário", "Kubernetes", "Azure", "TensorFlow", "SQL", "TypeScript", "Redux", "React"];
  const areas = ["DevOps", "Dados", "Desenvolvimento", "Design"];

  // Toggle de habilidades (lista)
  function toggleHabilidade(item) {
    const jaTem = filtro.habilidades.includes(item);

    const novasHabilidades = jaTem
      ? filtro.habilidades.filter((i) => i !== item)
      : [...filtro.habilidades, item];

    setFiltro({ ...filtro, habilidades: novasHabilidades });
  }

  // Setar área (apenas 1)
  function selecionarArea(area) {
    setFiltro({ ...filtro, area });
  }

  // Setar região (texto)
  function setarRegiao(regiao) {
    setFiltro({ ...filtro, regiao });
  }

  // Limpar tudo
  function limpar() {
    setFiltro({
      habilidades: [],
      area: "",
      regiao: ""
    });
  }

  return (
    <Modal width="w-fit" height="h-fit">
      <div className="p-6 h-full space-y-10">
        {/* Header */}
        <div className="absolute top-0 left-0 w-full bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold">Filtro</h2>

          <button
            onClick={() => setOpenFiltro(false)}
            className="text-4xl font-bold text-gray-600 hover:text-black cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Conteúdo */}
        <div className="space-y-5 mt-24">
          {/* Habilidades Técnicas */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Habilidades Técnicas
            </h3>

            <div className="flex flex-wrap md:grid md:grid-cols-4 gap-2">
              {tecnologias.map((t) => (
                <span
                  key={t}
                  onClick={() => toggleHabilidade(t)}
                  className={`px-3 py-1 cursor-pointer rounded-full flex gap-2 items-center font-semibold
                    ${
                      filtro.habilidades.includes(t)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    checked={filtro.habilidades.includes(t)}
                    onChange={() => toggleHabilidade(t)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Área */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Área</h3>

            <div className="flex flex-wrap md:grid md:grid-cols-4 gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  onClick={() => selecionarArea(a)}
                  className={`px-3 py-1 cursor-pointer rounded-full flex gap-2 items-center font-semibold
                    ${
                      filtro.area === a
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="area"
                    checked={filtro.area === a}
                    onChange={() => selecionarArea(a)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Região */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Região</h3>
            <input
              type="text"
              value={filtro.regiao}
              onChange={(e) => setarRegiao(e.target.value)}
              className="border border-black px-2 py-1 w-full"
              placeholder="Digite uma região (ex: São Paulo/SP)"
            />
          </div>

          {/* Limpar */}
          <div>
            <button
              onClick={limpar}
              className="px-3 py-1 cursor-pointer border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-full flex gap-2 items-center font-semibold"
            >
              Limpar filtro
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FiltroModal;
