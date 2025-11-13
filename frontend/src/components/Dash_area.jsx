import { useState, useEffect } from "react"
import { listar_analises } from "../services/dashboard"

const Dash_area = ({ area, user }) => {

  const [analise, setAnalise] = useState({})
  const [loading, setLoadnig] = useState(true)

  async function listar_analises_empresa() {

    try {

      const response = await listar_analises(user?.empresa, area)
      const data = response.data || {}
      setAnalise(data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoadnig(false)
    }

  }

  useEffect(() => {
    listar_analises_empresa();
  });

  return (
    <section className="w-full h-full flex justify-center">
      <div className="ml-40 mt-10 w-[80%] h-full">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 tracking-wide">
          Análises de {area} <span>({analise?.total_analises})</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-purple-400 font-medium">Carregando...</span>
          </div>
        ) : analise.total_analises <= 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <p className="text-gray-500 italic mt-5">
              Nenhuma analise feita nesta área.
            </p>
          </div>
        ) : (
          <section className="w-full h-full flex flex-col gap-2">
            <section className="flex justify-around items-center w-full h-full">
              <div className="flex flex-col items-center gap-4">
                <span className="text-2xl text-gray-400">Média de estresse</span>
                <div className="w-64 h-64 flex justify-center items-center border-[30px] border-blue-400 rounded-full">
                  <span className="text-6xl text-gray-400">{analise.media_estresse}</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <span className="text-2xl text-gray-400">Média de satisfação</span>
                <div className="w-64 h-64 flex justify-center items-center border-[30px] border-blue-400 rounded-full">
                  <span className="text-6xl text-gray-400">{analise.media_satisfacao}</span>
                </div>
              </div>
            </section>
            <section>
              <section className="flex justify-between px-2\ w-full h-full">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-2xl text-gray-400">Pontos positivos</span>
                  <section className="flex flex-col w-full gap-2">
                    {analise.fatores_positivos.map((f) => (
                      <div
                        className="bg-gray-400 border border-gray-200 hover:border-purple-600 transition-all duration-300 p-6 rounded-2xl shadow-md hover:shadow-lg"
                      >
                        <p className="text-gray-800 text-xl font-semibold leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </section>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <span className="text-2xl text-gray-400">Pontos negativos</span>
                  <section className="flex flex-col w-full gap-2">
                    {analise.fatores_negativos.map((f) => (
                      <div
                        className="bg-gray-400 border border-gray-200 hover:border-purple-600 transition-all duration-300 p-6 rounded-2xl shadow-md hover:shadow-lg"
                      >
                        <p className="text-gray-800 text-xl font-semibold leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </section>
                </div>
              </section>
            </section>
          </section>
        )}
      </div>
    </section>
  )
}

export default Dash_area