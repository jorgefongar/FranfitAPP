import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function BasicForm() {
  const [userPeso, setUserPeso] = useState("");
  const [userBiceps, setUserBiceps] = useState("");
  const [userCintura, setUserCintura] = useState("");
  const [userCadera, setUserCadera] = useState("");
  const [userAbdomen, setUserAbdomen] = useState("");
  const [userCuello, setUserCuello] = useState("");
  const [userPierna, setUserPierna] = useState("");

  const [fotoFrontal, setFotoFrontal] = useState(null);
  const [fotoEspalda, setFotoEspalda] = useState(null);
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      switch (name) {
        case 'fotoFrontal':
          setFotoFrontal(files[0]);
          break;
        case 'fotoEspalda':
          setFotoEspalda(files[0]);
          break;
        case 'fotoPerfil':
          setFotoPerfil(files[0]);
          break;
        default:
          break;
      }
    } else {
      switch (name) {
        case 'peso':
          setUserPeso(value);
          break;
        case 'biceps':
          setUserBiceps(value);
          break;
        case 'cintura':
          setUserCintura(value);
          break;
        case 'cadera':
          setUserCadera(value);
          break;
        case 'abdomen':
          setUserAbdomen(value);
          break;
        case 'cuello':
          setUserCuello(value);
          break;
        case 'pierna':
          setUserPierna(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      peso: userPeso,
      biceps: userBiceps,
      cintura: userCintura,
      cadera: userCadera,
      abdomen: userAbdomen,
      cuello: userCuello,
      pierna: userPierna,
    };

    try {
      const response = await axios.post('http://localhost:8055/items/userInfo', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      Swal.fire({
        title: 'Éxito',
        text: 'Los datos han sido registrados correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.error('Error al registrar los datos:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al registrar los datos. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mt-4 ml-4">Bienvenido!</h1>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4 ml-4">
            <div>
              <label htmlFor="peso" className="block text-sm font-medium text-gray-700">Peso (KG)</label>
              <input
                type="number"
                id="peso"
                name="peso"
                value={userPeso}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce tu peso en kilogramos"
                required
              />
            </div>
            <div>
              <label htmlFor="biceps" className="block text-sm font-medium text-gray-700">Bíceps (cm)</label>
              <input
                type="number"
                id="biceps"
                name="biceps"
                value={userBiceps}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu bíceps"
                required
              />
            </div>
            <div>
              <label htmlFor="cintura" className="block text-sm font-medium text-gray-700">Cintura (cm)</label>
              <input
                type="number"
                id="cintura"
                name="cintura"
                value={userCintura}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu cintura"
                required
              />
            </div>
            <div>
              <label htmlFor="cadera" className="block text-sm font-medium text-gray-700">Cadera (cm)</label>
              <input
                type="number"
                id="cadera"
                name="cadera"
                value={userCadera}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu cadera"
                required
              />
            </div>
            <div>
              <label htmlFor="abdomen" className="block text-sm font-medium text-gray-700">Abdomen (cm)</label>
              <input
                type="number"
                id="abdomen"
                name="abdomen"
                value={userAbdomen}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu abdomen"
                required
              />
            </div>
            <div>
              <label htmlFor="cuello" className="block text-sm font-medium text-gray-700">Cuello (cm)</label>
              <input
                type="number"
                id="cuello"
                name="cuello"
                value={userCuello}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu cuello"
                required
              />
            </div>
            <div>
              <label htmlFor="pierna" className="block text-sm font-medium text-gray-700">Pierna (cm)</label>
              <input
                type="number"
                id="pierna"
                name="pierna"
                value={userPierna}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu pierna"
                required
              />
            </div>
            <div>
              <label htmlFor="fotoFrontal" className="block text-sm font-medium text-gray-700">Foto frontal</label>
              <input
                type="file"
                id="fotoFrontal"
                name="fotoFrontal"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="fotoEspalda" className="block text-sm font-medium text-gray-700">Foto de espalda</label>
              <input
                type="file"
                id="fotoEspalda"
                name="fotoEspalda"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="fotoPerfil" className="block text-sm font-medium text-gray-700">Foto de perfil</label>
              <input
                type="file"
                id="fotoPerfil"
                name="fotoPerfil"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrar revisión
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mt-4 mr-4">Guía de medidas</h1>
          <div className="mt-4 mr-4">
            <img
              src="medidascorpo.png"
              alt="Foto"
              className="w-full border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
