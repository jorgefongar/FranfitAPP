import React, { useState } from 'react';
import axios from 'axios';
import { Input } from './components/ui/Input.tsx';
import { Button } from './components/ui/Button.tsx';
import { Label } from './components/ui/Label.tsx';
import { Titulo2 } from './components/ui/titulo2.tsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Respuesta del servidor:', response.data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario a otra página
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-21 w-auto"
          src="/LOGO.png" // Ajusta la ruta del logo según la ubicación en tu proyecto
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
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Olvidaste tu contraseña?
                </a>
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

          <Button type='submit' className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ACCEDER</Button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Aun no eres parte del equipo?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Únete!
          </a>
        </p>
      </div>
    </div>
  );
}
