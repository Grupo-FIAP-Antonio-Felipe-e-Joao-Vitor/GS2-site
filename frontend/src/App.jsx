import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./routes/Cadastro"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"
import Form from "./routes/Form"

function App() {

   const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <BrowserRouter>

      <Header user={user} setUser={setUser}/>

      <main>

        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/form" element={<Form user={user}/>}/>

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App
