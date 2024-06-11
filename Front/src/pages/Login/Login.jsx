import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoOficialQC_Vermelha.png";
import LogoGoogle from "../../assets/LogoGoogle.png";
import { useState } from "react";
import api from "../../services/Api";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const useSchema = z.object({
    username: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  });

  const handleChange = (e) => {

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('cheguei aq')
      const response = await api.post('/auth/signin', { username, password });
      api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
      
      const test = await api.post('/dataclient/register', { username, password });
      console.log(test);
      if (response.status === 200) {
        toast.success("Login realizado com sucesso!");
        //navigate('/');
      }  else {
        toast.error('Ocorreu um erro inesperado!');
        
      }
      setError('');

    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach(error => {
          toast.error(error.message);
        });
      }else{
        console.log(e.response.data.message);
        toast.error(e.response.data.message);
      }
    }
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <ToastContainer />

      <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-white dark:text-white">
        <img className="w-25 h-48 mx-auto mb-4 mt-8 border-gray-900 rounded-lg" src={Logo} alt="logo" />
      </a>
      <h1 className="text-4xl text-center mb-6">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label className="flex email text-2xl mb-2">E-mail</label>
        <input className="flex w-full h-10 mx-auto text-xl mb-4 p-2.5 border rounded-md"
          type="email" name="email" id="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="exemplo@gmail.com" required />
        <label className="flex email text-2xl mb-2">Senha</label>
        <input className="flex w-full h-10 mx-auto text-xl mb-5 p-2.5 border rounded-md" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <button type="submit" className="w-full text-white border bg-red-600 hover:bg-primary-700 focus:ring-4
                 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-base px-5 py-2.5 text-center dark:bg-primary-600
                  dark:hover:bg-red-700 dark:focus:ring-primary-800 mb-6">Entrar</button>
        <p className="text-xl mb-5">
          Ainda não possui uma conta?
          <a className="text-xl font-bold text-gray-600 hover:underline dark:text-gray-600"><Link className="text-bn" to={'/registrar'}>cadastre-se</Link></a>
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
          <a href="#" className="text-xl font-bold text-gray-600 hover:underline dark:text-gray-600">solicite ajuda</a>
          <br />
        </p>
      </form>

    </div>
  );
};

export default Login;