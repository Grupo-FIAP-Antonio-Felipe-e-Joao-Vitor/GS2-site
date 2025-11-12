import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./routes/Cadastro"
import Dashboard from "./routes/Dashboard"
import Login from "./routes/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"
import HealthForm from "./routes/HealthForm"
import Formulario from "./routes/Formulario";

function App() {

   const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <BrowserRouter>

      <Header user={user} setUser={setUser}/>

      <main >

        <Routes>

          <Route path="/" element={<Dashboard />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/HealthForm" element={<HealthForm user={user}/>}/>
          <Route path="/formulario" element={<Formulario user={user}/>}/>

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App
