import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const Profile = ({ user, setUser }) => {
  
    const navigate = useNavigate()

    function sair () {
        logout()
        setUser(null)
        navigate("/")
    }
  
    return (
    <div
      className="absolute top-14 -right-2 z-50"
    >
      <div className="absolute right-5 -top-1 z-10 w-4 h-4 bg-white rotate-45"></div>

      {/* caixa principal */}
      <div className="bg-white z-40 h-fit min-w-60 w-fit p-2 rounded-2xl shadow-2xl shadow-gray-500 border-2 border-gray-600 flex flex-col justify-center px-4">

        <li className="flex gap-2 list-none text-gray-800 uppercase font-bold">
            Nome: <span className="text-gray-800 normal-case font-semibold"> { user.nome }</span>
        </li>

        <li className="flex gap-2 list-none text-gray-800 uppercase font-bold">
            Empresa: <span className="text-gray-800 normal-case font-semibold"> { user.empresa }</span>
        </li>

        <li className="flex gap-2 list-none text-gray-800 uppercase font-bold">
            Atuação: <span className="text-gray-800 normal-case font-semibold"> { user.atuacao }</span>
        </li>

        <li className="flex gap-2 list-none text-gray-800 uppercase font-bold">
            Email: <span className="text-gray-800 normal-case font-semibold"> { user.email }</span>
        </li>

        <button
            className="text-red-400 text-lg mt-5 text-left font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
            onClick={() => sair()}
        >
            Encerrar sessão
        </button>

      </div>
    </div>
  );
};

export default Profile;
