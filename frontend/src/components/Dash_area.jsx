import { useState, useEffect } from "react"
import { listar_analises } from "../services/dashboard"
import CardPontos from "./CardPontos"
import GraficoDonout from "./GraficoDonout"

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
      <div className="ml-10 md:ml-40 md:mt-10 w-[80%] h-full">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 tracking-wide">
          Análises de {area} <span>({analise?.total_analises})</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-blue-400 font-medium">Carregando...</span>
          </div>
        ) : analise.total_analises <= 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <p className="text-white italic mt-5">
              Nenhuma analise feita nesta área.
            </p>
          </div>
        ) : (
          <section className="w-full h-full flex flex-col gap-2">
            <section className="flex flex-col md:flex-row justify-around items-center w-full h-full">
              <div className="flex flex-col mt-2 md:mt-0 items-center gap-4">
                <span className="text-2xl text-white">Média de estresse</span>
                <GraficoDonout numero={analise.media_estresse}/>
              </div>

              <div className="flex flex-col mt-7 md:mt-0 items-center gap-4">
                <span className="text-2xl text-white">Média de satisfação</span>
                <GraficoDonout numero={analise.media_satisfacao}/>
              </div>
            </section>
            <section className="w-full mt-10">
              <section className="flex flex-col md:flex-row justify-between px-2\ w-full h-full">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-2xl text-white">Pontos positivos</span>
                  <section className="flex flex-col w-full gap-2">
                    {analise.fatores_positivos.map((f, i) => (
                      <CardPontos key={i} ponto={f}/>
                    ))}
                  </section>
                </div>

                <div className="flex mt-7 md:mt-0 flex-col items-center gap-4">
                  <span className="text-2xl text-white">Pontos negativos</span>
                  <section className="flex flex-col w-full gap-2">
                    {analise.fatores_negativos.map((f, i) => (
                      <CardPontos key={i} ponto={f}/>
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