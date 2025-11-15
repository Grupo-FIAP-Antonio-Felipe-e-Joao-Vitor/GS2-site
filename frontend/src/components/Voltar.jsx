import { useNavigate } from "react-router-dom"

const Voltar = () => {

    const navigate = useNavigate()

  return (

    <div className="flex p-2 gap-2">

        <span
            onClick={() => navigate("/dashboard")}
            className="text-gray-400 fixed top-20 left-10 text-lg font-semibold cursor-pointer hover:underline transition-all duration-300"
        >
            &larr; Voltar ao dashboard
        </span>

    </div>

  )
}

export default Voltar