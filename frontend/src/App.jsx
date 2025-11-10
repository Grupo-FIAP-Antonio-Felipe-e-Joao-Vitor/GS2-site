import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./routes/Cadastro"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>

      <Header />

      <main>

        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/login" element={<Login />}/>

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App
