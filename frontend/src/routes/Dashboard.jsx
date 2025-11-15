import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Aside from "../components/Aside"
import Dash_forms from "../components/Dash_forms"
import Dash_recomendacoes from "../components/Dash_recomendacoes"
import Dash_salas from "../components/Dash_salas"
import Dash_area from "../components/Dash_area"
import Dash_gerir from "../components/Dash_gerir"

const Dashboard = ({ user }) => {

  const navigate = useNavigate()
  const [dashboard, setDashboard] = useState("forms")

  useEffect(() => {

    if (!user) {
      alert("Registre-se primeiro.")
      navigate("/login")
    }
  }, [user, navigate])

  return (
    <main className="flex flex-col bg-blue-950 min-h-screen pb-10">
      <Aside user={user} setDashboard={setDashboard} />

      <h2 className="text-white ml-25 mt-10 h-10 min-w-60 text-2xl font-bold">Olá <span className="text-blue-400">{user?.nome}!</span></h2>

      <div className="mt-13 w-full h-full">
        {dashboard === "forms" ? (
          <Dash_forms />
        ) : dashboard === "recomendacoes" ? (
          <Dash_recomendacoes user={user}/>
        ) : dashboard == "salas" ? (
          <Dash_salas />
        ) : user?.atuacao === "Lideranca" && dashboard === "gerir" ? (
          <Dash_gerir user={user}/>
        ) : user?.atuacao === "Lideranca" && dashboard.includes("area") ? (
          <Dash_area area={dashboard.split("_")[1]} user={user}/>
        ) : (null)}
      </div>


    </main>
  )
}

export default Dashboard