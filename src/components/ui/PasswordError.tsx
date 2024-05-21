import React from 'react';

export default function PasswordError() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error de Contraseña</h2>
        <p className="text-gray-700">
          PONTE EN CONTACTO CON TU ENTRENADOR PARA PODER CAMBIAR LA CONTRASEÑA Y ACCEDER A TU PERFIL. ¡GRACIAS!
        </p>
      </div>
    </div>
  );
}
