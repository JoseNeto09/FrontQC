
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from "./components/Navbar";
import CadastroUser from "./pages/CadastroUser/CadastroUsuario";


export default function App() {
  return (
    <BrowserRouter>

        <Navbar/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<CadastroUser/>} />
          
        </Routes>
    </BrowserRouter>
  )
}
