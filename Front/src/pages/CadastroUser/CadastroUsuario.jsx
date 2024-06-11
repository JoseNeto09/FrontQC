import { useState } from "react";
import Logo from "../../assets/LogoOficialQC_Vermelha.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services/Api";
const CadastroUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [erro, setError] = useState('');
  const [responseStatus, setResponseStatus] = useState(null)

  const handleChange = (e) => {

  };

  const userSchema = z.object({
    email: z.string().email("Email inválido"),
    username: z.string().min(1, "Nome é obrigatório"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "Senha de confirmação deve ter no mínimo 6 caracteres"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
      confirmPassword

    };
    try {
      userSchema.parse(user);
      setError('');

      const response = await api.post('/auth/signup', { username, email, password });
      console.log(response.status);
      toast.success("Sucess");
      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!");
        navigate('/validar-email');
      } else {
        navigate('/register')
      }
      console.log("Dados enviados com sucesso:", user);
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach(error => {
          toast.error(error.message);
        });
      } else {
        toast.error("Ocorreu um erro inesperado");
      }
      console.error("Erro de validação:", e.errors);
    }

  }
  return (
    <section className="bg-slate-50 dark:bg-slate-50">
    
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-white dark:text-white">
            <img className="w-25 h-48 mx-auto mb-4 mt-8 border-gray-900 rounded-lg" src={Logo} alt="logo" />
          </a>
          <h1 className="flex font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
            Olá! Faça seu cadastro para realizar as compras.
            <h1 />

          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

            <label className="flex email text-2xl mb-2">E-mail</label>
            <input className="flex w-full h-10 mx-auto text-xl mb-4 p-2.5 border rounded-md"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@gmail.com"
              required />


            <label className="flex name text-2xl mb-2">Nome Completo</label>
            <input type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="flex w-full h-10 mx-auto text-xl mb-4 p-2.5 border rounded-md"
              placeholder="Fulano de tal"
              required />



            <label htmlFor="password" className="flex email text-2xl">
              Digite sua Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex w-full h-10 mx-auto text-xl mb-4 p-2.5 border rounded-md"
            />


            <label htmlFor="repeatPassword" className="flex password text-2xl">
              Repita sua Senha
            </label>
            <input
              type="password"
              id="repeatPassword"
              value={confirmPassword}
              name="repeatPassword"
              onChange={(e) => setConfirmPassword(e.target.value)} required
              className="lex w-full h-10 mx-auto text-xl mb-4 p-2.5 border rounded-md"
            />


            <button
              type="submit"
              className="w-full text-white border bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-red-700 dark:focus:ring-primary-800"
            >
              Cadastrar
            </button>

            <p className="flex text-2xl mb-4">
              Tendo problema com cadastro?
              <a href="#" className="text-blue-600">Solicite ajuda</a>
            </p>
          </form>
        </div>
      </div>
    </section >
  );
};

export default CadastroUser;