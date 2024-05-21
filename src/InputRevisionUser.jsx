import React, { useState } from 'react';
import NavigationBlockuser from './components/ui/nav';

export default function BasicForm() {
  const [formData, setFormData] = useState({
    peso: '',
    biceps: '',
    cintura: '',
    cadera: '',
    abdomen: '',
    cuello: '',
    pierna: '',
    fotoFrontal: null,
    fotoEspalda: null,
    fotoPerfil: null,
  });

  const navigation = [];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos a tu backend o hacer lo que necesites con ellos
  };

  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mt-4 ml-4">Bienvenido {formData.nombre ? formData.nombre : ''}!!</h1>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4 ml-4">
            <div>
              <label htmlFor="peso" className="block text-sm font-medium text-gray-700">Peso (KG)</label>
              <input
                type="number"
                id="peso"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce tu peso en kilogramos"
              />
            </div>
            <div>
              <label htmlFor="biceps" className="block text-sm font-medium text-gray-700">Bíceps (cm)</label>
              <input
                type="number"
                id="biceps"
                name="biceps"
                value={formData.biceps}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu bíceps"
              />
            </div>
            <div>
              <label htmlFor="cintura" className="block text-sm font-medium text-gray-700">Cintura (cm)</label>
              <input
                type="number"
                id="cintura"
                name="cintura"
                value={formData.cintura}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu cintura"
              />
            </div>
            <div>
              <label htmlFor="cadera" className="block text-sm font-medium text-gray-700">Cadera (cm)</label>
              <input
                type="number"
                id="cadera"
                name="cadera"
                value={formData.cadera}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu cadera"
              />
            </div>
            <div>
              <label htmlFor="abdomen" className="block text-sm font-medium text-gray-700">Abdomen (cm)</label>
              <input
                type="number"
                id="abdomen"
                name="abdomen"
                value={formData.abdomen}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu abdomen"
              />
            </div>
            <div>
              <label htmlFor="cuello" className="block text-sm font-medium text-gray-700">Cuello (cm)</label>
              <input
                type="number"
                id="cuello"
                name="cuello"
                value={formData.cuello}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu cuello"
              />
            </div>
            <div>
              <label htmlFor="pierna" className="block text-sm font-medium text-gray-700">Pierna (cm)</label>
              <input
                type="number"
                id="pierna"
                name="pierna"
                value={formData.pierna}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Introduce la medida de tu pierna"
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
