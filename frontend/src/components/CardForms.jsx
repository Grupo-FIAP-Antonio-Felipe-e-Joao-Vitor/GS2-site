import { Link } from "react-router-dom"

const CardForms = ({ titulo, descricao, data, form }) => {
  return (
    <div className="flex flex-col mt-15 w-60 min-h-64 h-full rounded-3xl">
      <div className="flex justify-center items-center bg-emerald-800 w-full rounded-t-2xl h-16">
        <p className="font-medium text-xl text-center">{titulo}</p>
      </div>

      <div className="text-black flex flex-col gap-2 bg-gray-300 text-lg text-center px-2 py-5 rounded-b-2xl font-medium">
        <p className="text-lg">{descricao}</p>
        <p className="border-t mt-4">Prazo de finalização: <span className="font-semibold">{data}</span></p>
        <div className="flex justify-center mt-3">
          <Link to={form} className="flex text-white bg-emerald-700 transition-all duration-300 hover:bg-emerald-800 w-fit px-5 h-8 justify-center items-center rounded-2xl font-medium">
            Responder agora
          </Link>
        </div>
      </div>

    </div>
  )
}

export default CardForms