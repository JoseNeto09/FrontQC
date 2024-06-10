import { Link } from "react-router-dom";
import Logo from "../../assets/LogoOficialQC_Vermelha.png";
import LogoGoogle from "../../assets/LogoGoogle.png";
import  { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/signin", formData);
      setToken(response.data);
      setError('');
    } catch (error) {
      setError("Erro ao autenticar usuário. Verifique suas credenciais.");
    }
  };

  return (
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-white dark:text-white">
              <img className="w-25 h-48 mx-auto mb-4 mt-8 border-gray-900 rounded-lg" src={Logo} alt="logo" />
            </a>
            <h1 className="text-4xl text-center mb-6">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div>
                <label className="flex email text-2xl mb-2">E-mail</label>
                <input className="flex w-full h-10 mx-auto text-xl mb-4 p-2.5 border rounded-md"
                 type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="exemplo@gmail.com" required />
              </div>
              <div>
                <label className="flex email text-2xl mb-2">Senha</label>
                <input className="flex w-full h-10 mx-auto text-xl mb-5 p-2.5 border rounded-md" type="password" name="password" id="password" onChange={handleChange} placeholder="Senha" required />
                <button type="submit" className="w-full text-white border bg-red-600 hover:bg-primary-700 focus:ring-4
                 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-base px-5 py-2.5 text-center dark:bg-primary-600
                  dark:hover:bg-red-700 dark:focus:ring-primary-800 mb-6">Entrar</button>
              </div>
                <p className="text-xl mb-5">
                  Ainda não possui uma conta?
                  <a className="text-xl font-bold text-gray-600 hover:underline dark:text-gray-600"><Link className="text-bn"to={'/cadastro'}>cadastre-se</Link></a>
                </p>
                <button type="button" className="flex items-center justify-center w-full text-dark border bg-white hover:bg-primary-700
                 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-base px-5 py-2.5 text-center dark:bg-primary-600
                 dark:hover:bg-red-700 dark:focus:ring-primary-800 mb-5">
                <div className="flex items-center mr-1">
                  <img className="w-4 h-4 mr-1" src={LogoGoogle} alt="Logo Google" />
                  Google
                </div>
              </button>
              <p className="text-xl text-gray-900 dark:text-gray-900">
                Problemas com Login?
                <a href="#"className="text-xl font-bold text-gray-600 hover:underline dark:text-gray-600">solicite ajuda</a>
                <br />
              </p>
            </form>
            {error && <p>{error}</p>}
            {token && <p>Token JWT: {token}</p>}
        </div>
  );
};

export default Login;