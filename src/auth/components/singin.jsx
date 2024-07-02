import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/directusClientAuth';
import { Input } from '../../shared/components/Input';
import { Button } from '../../shared/components/Button';
import { Label } from '../../shared/components/Label';
import { Titulo2 } from '../../shared/components/titulo2';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      navigate('/Admin');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      Swal.fire({
        title: 'Error en el inicio de sesión',
        text: 'Credenciales incorrectas',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-21 w-auto"
          src="/LOGO.png"
          alt="Logo"
        />
        <Titulo2>Bienvenido a Franfit!</Titulo2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor='email'>Dirección de correo</Label>
            <div className="mt-2">
              <Input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Dirección de correo'
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor='password'>Contraseña</Label>
              <div className="text-sm">
                <Link to="/Olvidastepass" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <Input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='******'
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <Button type='submit' className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            ACCEDER
          </Button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Aun no eres parte del equipo?{' '}
          <Link to="/Registroinicial" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Únete!
          </Link>
        </p>
      </div>
    </div>
  );
}
