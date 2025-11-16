import desempregados from "../data/desempregados.json"
import CardDesempregado from "./CardDesempregado"

const ExibirDesempregados = ({ filtros, setOpen, setSelected }) => {

  const filtrarDesempregados = () => {
    return desempregados.filter((d) => {
      
      // 1) Filtra habilidades (deve conter TODAS)
      if (filtros.habilidades?.length > 0) {
        const temTodas = filtros.habilidades.every(h =>
          d.habilidadesTecnicas.includes(h)
        )
        if (!temTodas) return false
      }

      // 2) Filtra área
      if (filtros.area && d.area !== filtros.area) {
        return false
      }

      // 3) Filtra região
      if (filtros.regiao && !d.localização.includes(filtros.regiao)) {
        return false
      }

      return true
    })
  }

  const listaFiltrada = filtrarDesempregados()

  return (
    <div className="grid md:grid-cols-7 gap-10 mt-5">
      {listaFiltrada.map((desempregado) => (
        <CardDesempregado
          key={desempregado.id}
          setOpen={setOpen}
          setSelected={setSelected}
          desempregado={desempregado}
        />
      ))}
    </div>
  )
}

export default ExibirDesempregados
