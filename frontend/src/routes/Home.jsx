import { useState } from "react"
import desempregados from "../data/desempregados.json"
import CardDesempregado from "../components/CardDesempregado"
import DesempregadoModal from "../components/DesempregadoModal"

const Home = () => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <section className="flex flex-col gap-5 p-5">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl md:text-5xl font-bold uppercase pb-5 border-b w-fit border-blue-300 text-blue-400">Buscando emprego</h1>
      </div>
      <div className="flex gap-10 flex-wrap mt-5">

        {desempregados.map((desempregado) => (
          <CardDesempregado key={desempregado.id} setOpen={setOpen} setSelected={setSelected} desempregado={desempregado}/>
        ))}

        {open && selected && (
          <DesempregadoModal selected={selected} setOpen={setOpen}/>
        )}

      </div>
    </section>
  )
}

export default Home