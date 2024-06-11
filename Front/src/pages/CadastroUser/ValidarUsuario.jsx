import { useState } from 'react';
import api from '../../services/Api';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from "zod";

const ValidarUsuario = () => {
    const navigate = useNavigate();

    const [cod, setCod] = useState('');
    const [setValidationResult] = useState(null);
    const [error, setError] = useState('');
    const [responseStatus, setResponseStatus] = useState(null)


    const handleCodeChange = (e) => {
        setCod(e.target.value);
    };

    const userSchema = z.object({
        cod: z.string().max(6, "Codigo deve ter no máximo 6 digitos"),
    });

    const handleValidation = async () => {
        const codeValidation = {
            cod
        };
        try {
            const response = await api.post('/auth/signup/checkemail', codeValidation);
            if (response.status === 201) {
                toast.success("Cadastro realizado com sucesso!");
                navigate('/login');
            } else {
                toast.error("Código inválido, tente novamente!");
            }
        } catch (error) {

            if (e instanceof z.ZodError) {
                e.errors.forEach(error => {
                    toast.error(error.message);
                });
            } else {
                toast.error("Ocorreu um erro inesperado");
            }
        }
    }

    return (
        <div className="email-validation-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4">Validação de Email</h1>
            <input
                type="text"
                value={cod}
                onChange={handleCodeChange}
                placeholder="Digite o código de validação"
                className="bg-white border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <button
                onClick={handleValidation}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Validar Código
            </button>
            {error && <p className="error-message mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">{error}</p>}
        </div>
    );
};

export default ValidarUsuario;
