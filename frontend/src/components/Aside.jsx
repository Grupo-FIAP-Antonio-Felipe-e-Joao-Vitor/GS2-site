import { IoIosArrowForward } from "react-icons/io";

const Aside = ({ user, setDashboard }) => {

  return (
    <aside className=" fixed top-0 group flex-col justify-center text-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg h-screen w-20 hover:w-60 rounded-r-[10px] transition-all duration-650 overflow-hidden z-100">

      <h2 className="text-white text-2xl mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        {user?.empresa}
      </h2>

      <section className="flex flex-col items-center justify-center text-center gap-5">
        <div
          onClick={() => setDashboard("forms")}
          className="mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
        >
          <p
            className=" font-bold whitespace-nowrap">
            Formulários
          </p>
        </div>

        <div
          onClick={() => setDashboard("recomendacoes")}
          className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <p
            className=" font-bold whitespace-nowrap">
            Recomendações
          </p>
        </div>

        <div
          onClick={() => setDashboard("salas")}
          className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 hover:text-black text-white hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <p
            className="font-bold whitespace-nowrap">
            Salas de reunião
          </p>
        </div>

        {user?.atuacao === "Lideranca" && (
          <div className="flex flex-col items-center justify-center text-center gap-5">

            <div
              onClick={() => setDashboard("gerir")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p
                className=" font-bold whitespace-nowrap">
                Gerir funcionários
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_TI")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p

                className=" font-bold whitespace-nowrap">
                TI
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Marketing")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p

                className=" font-bold whitespace-nowrap">
                Marketing
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Vendas")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p
                className=" font-bold whitespace-nowrap">
                Vendas
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_RH")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p
                className=" font-bold whitespace-nowrap">
                RH
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Financeiro")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p
                className=" font-bold whitespace-nowrap">
                Financeiro
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Lianderanca")}
              className="group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              <p

                className=" font-bold whitespace-nowrap">
                Lianderança
              </p>
            </div>

          </div>
        )}
      </section>

      <IoIosArrowForward className="ml-6 size-8 text-white absolute top-1/2 group-hover:opacity-0 transition-all duration-200" />
    </aside>
  );
};

export default Aside;
