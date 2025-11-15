import { IoIosArrowForward } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Aside = ({ user, setDashboard }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const asideRef = useRef(null);

  useEffect(() => {
    function checkSize() {
      setIsMobile(window.innerWidth < 768); // md = 768px
    }

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
  function handleClickOutside(event) {
    if (asideRef.current && !asideRef.current.contains(event.target)) {
      if (isMobile) setOpen(false); // Fecha menu
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isMobile]);

  return (
    <aside 
    ref={asideRef}
    onClick={() =>{
        if (isMobile) setOpen(!open);
    }}
    className={`fixed top-0 group flex-col justify-center text-center gap-3 bg-white/5 backdrop-blur-md border 
    border-white/20 shadow-lg h-screen w-10 md:w-20 hover:w-60 rounded-r-[10px] transition-all duration-650 overflow-hidden z-100

    ${isMobile && open ? "w-64" : ""}
    `}>

      <h2 className={`text-white text-2xl mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
        ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
        `}>
        {user?.empresa}
      </h2>

      <section className="flex flex-col items-center justify-center text-center gap-5">
        <div
          onClick={() => setDashboard("forms")}
          className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
          ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
          `}
        >
          <p
            className=" font-bold whitespace-nowrap">
            Formulários
          </p>
        </div>

        <div
          onClick={() => setDashboard("recomendacoes")}
          className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
          ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
          `}>
          <p
            className=" font-bold whitespace-nowrap">
            Recomendações
          </p>
        </div>

        <div
          onClick={() => setDashboard("salas")}
          className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
          ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
          `}>
          <p
            className="font-bold whitespace-nowrap">
            Salas de reunião
          </p>
        </div>

        {user?.atuacao === "Lideranca" && (
          <div className="flex flex-col items-center justify-center text-center gap-5">

            <div
              onClick={() => setDashboard("gerir")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p
                className=" font-bold whitespace-nowrap">
                Gerir funcionários
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_TI")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p

                className=" font-bold whitespace-nowrap">
                TI
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Marketing")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p

                className=" font-bold whitespace-nowrap">
                Marketing
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Vendas")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p
                className=" font-bold whitespace-nowrap">
                Vendas
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_RH")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p
                className=" font-bold whitespace-nowrap">
                RH
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Financeiro")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p
                className=" font-bold whitespace-nowrap">
                Financeiro
              </p>
            </div>

            <div
              onClick={() => setDashboard("area_Lianderanca")}
              className={`mt-5 md:mt-20 group flex justify-center items-center h-7 w-40 border rounded-2xl border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
              ${isMobile && open ? "opacity-100 transition-all duration-300 whitespace-nowrap" : ""}
              `}>
              <p

                className=" font-bold whitespace-nowrap">
                Lianderança
              </p>
            </div>

          </div>
        )}
      </section>

      <IoIosArrowForward className="hidden md:block ml-6 size-8 text-white absolute top-1/2 group-hover:opacity-0 transition-all duration-200" />
      <HiBars2 className={`md:hidden ml-1 rotate-90 size-8 text-white absolute top-1/2 group-hover:opacity-0 transition-all duration-200
        ${isMobile && open ? "opacity-0 transition-all duration-300 whitespace-nowrap" : ""}
        `}/>
    </aside>
  );
};

export default Aside;
