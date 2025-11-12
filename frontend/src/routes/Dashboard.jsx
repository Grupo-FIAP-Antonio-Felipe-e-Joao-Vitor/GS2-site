import Aside from "../components/Aside"
import { Link } from "react-router-dom"

const Home = ({user}) => {
  
  return (
    <main className="flex bg-blue-950 h-screen pb-10">
      <Aside user={user}/>

      <h2 className="absolute text-white ml-25 mt-10 h-10 min-w-60 text-2xl font-bold">Olá <span className="text-purple-400">{user?.nome}!</span></h2>

      <div className="flex justify-between w-full text-white ml-30 mt-13">
        
        <section className="flex flex-col ml-10 mt-25 w-1/2">
          <p className="font-bold">
            Estes são seus formulários que ainda não foram respondidos:
          </p>

          <div className="flex flex-col bg-gray-300 mt-15 w-60 h-65 rounded-3xl">
            <div className="flex justify-center items-center bg-emerald-800 w-full rounded-t-2xl h-15 ">
              <p className="font-medium">Formulário de desempenho</p>
            </div>

            <div className="text-black text-left font-medium font mt-8 ml-4">
              <p>Prazo de finalização:</p>
              <p>23/11</p>
            </div>
            <div className="flex justify-center mt-12">
              <Link to="" className="flex bg-emerald-800 w-35 h-8 justify-center items-center rounded-2xl font-medium hover:text-black">
                Responder agora
              </Link>
            </div>
          </div>
        </section>

        <div className=" bg-white w-2 m-15"></div>

        <section className="flex flex-col ml-20 mt-25 w-1/2">
          <p className="font-bold">
            Estes são seus formulários já respondidos:
          </p>

          <div className="flex flex-col bg-gray-300 mt-15 w-60 h-65 rounded-3xl">
            <div className="flex justify-center items-center bg-emerald-800 w-full rounded-t-xl h-15 ">
              <p className="font-medium">Health Form</p>
            </div>

            <div className="text-black text-left font-medium font mt-8 ml-4">
              <p>Prazo de finalização:</p>
              <p>23/11</p>
            </div>
            <div className="flex justify-center mt-12">
              <Link to="/HealthForm" className="flex bg-emerald-800 w-35 h-8 justify-center items-center rounded-2xl font-medium hover:text-black">
                Responder agora
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home