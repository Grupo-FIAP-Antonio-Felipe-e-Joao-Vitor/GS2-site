import { useState } from "react"
import DesempregadoModal from "../components/DesempregadoModal"
import { RiMenuSearchLine } from "react-icons/ri"
import FiltroModal from "../components/FiltroModal"
import ExibirDesempregados from "../components/ExibirDesempregados"
import avatar from "../assets/imagem-avatar.png"
import Bot from "../components/Bot"

const Home = ({ user }) => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [openFiltro, setOpenFiltro] = useState(false)
  const [filtro, setFiltro] = useState({
    habilidades: [],
    area: "",
    regiao: ""
  })
  const [openBot, setOpenBot] = useState(false)

  return (
    <section className="flex flex-col gap-5 p-5">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl md:text-5xl font-bold uppercase pb-5 border-b w-fit border-blue-300 text-blue-400">Buscando emprego</h1>
      </div>

      <div className="flex justify-end pr-4 gap-5">

        <div className="flex items-center gap-2 flex-wrap">

          {filtro.habilidades.map((h) => (
            <span
              onClick={() =>
                setFiltro({
                  ...filtro,
                  habilidades: filtro.habilidades.filter((item) => item !== h)
                })
              }
              key={h}
              className="hover:line-through transition-all duration-300 cursor-pointer px-3 py-1 bg-gray-500 rounded-full flex gap-2 items-center text-gray-200 font-semibold"
            >
              <span>X</span> {h}
            </span>
          ))}

          {/* ÁREA */}
          {filtro.area && (

            <span
              onClick={() =>
                setFiltro({
                  ...filtro,
                  area: ""
                })
              }
              className="hover:line-through transition-all duration-300 cursor-pointer px-3 py-1 bg-gray-500 rounded-full flex gap-2 items-center text-gray-200 font-semibold">
              <span>X</span> {filtro.area}
            </span>
          )}

          {/* REGIÃO */}
          {filtro.regiao && (
            <span
              onClick={() =>
                setFiltro({
                  ...filtro,
                  regiao: ""
                })
              }
              className="hover:line-through transition-all duration-300 cursor-pointer px-3 py-1 bg-gray-500 rounded-full flex gap-2 items-center text-gray-200 font-semibold">
              <span>X</span> {filtro.regiao}
            </span>
          )}

        </div>


        <span
          onClick={() => setOpenFiltro(true)}
          className="flex gap-2 items-center text-white text-2xl cursor-pointer">

          <RiMenuSearchLine />
          Filtrar

        </span>

        {openFiltro && (
          <FiltroModal setOpenFiltro={setOpenFiltro} setFiltro={setFiltro} filtro={filtro} />
        )}

      </div>



      <ExibirDesempregados
        filtros={filtro}
        setOpen={setOpen}
        setSelected={setSelected}
      />

      {open && selected && (
        <DesempregadoModal selected={selected} setOpen={setOpen} user={user}/>
      )}

      <Bot
        avatar={avatar}
        setOpenBot={setOpenBot}
        openBot={openBot}
        iframe={
          <iframe
            src="https://typebot.co/my-typebot-fit38xw"
            className="w-full h-full border-none mt-2"
          ></iframe>
        }
      />

    </section>
  )
}

export default Home