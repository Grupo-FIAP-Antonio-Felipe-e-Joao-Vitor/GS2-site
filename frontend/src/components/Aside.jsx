import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Aside = ({ user }) => {
  const navigate = useNavigate();

  return (
    <aside className="relative group flex-col justify-center text-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg h-[95vh] w-20 hover:w-60 rounded-r-[10px] transition-all duration-650 overflow-hidden">
      <section className="flex flex-col items-center justify-center text-center gap-5">
        <div
          onClick={() => navigate("/formulario")}
          className="mt-10 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap"
        >
          <p className="text-white hover:text-black font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
            Formulários
          </p>
        </div>

        <div className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
          <p className="text-white hover:text-black font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
            Recomendações
          </p>
        </div>

        <div className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
          <p className="text-white hover:text-black font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
            Salas de reunião
          </p>
        </div>

        <div className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
          <p className="text-white hover:text-black font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap">
            Ver Perfil
          </p>
        </div>
      </section>

      <IoIosArrowForward className="ml-6 size-8 text-white absolute top-1/2 group-hover:opacity-0 transition-all duration-200" />
    </aside>
  );
};

export default Aside;
