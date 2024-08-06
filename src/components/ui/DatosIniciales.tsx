import React, { useState } from 'react';
import { registerUser } from '../../services/apiService'; // Asegúrate de que la ruta sea correcta
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    profilePhoto: null,
    age: '',
    height: '',
    weight: '',
    email: '',
    phone: '',
    allergies: '',
    dislikes: '',
    mealsPerDay: '',
    observations: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      first_name: formData.name,
      last_name: formData.surname,
      // avatar: formData.profilePhoto,
      age: formData.age,
      height: formData.height,
      weight: formData.weight,
      email: formData.email,
      phone: formData.phone,
      allergies: formData.allergies,
      foods_you_dont_like: formData.dislikes,
      food_per_day: formData.mealsPerDay,
      observations: formData.observations,
      role: 'b89e1758-67e2-40e0-8e65-4a8e6117c5d2',
    };

    try {
      const response = await registerUser(userData);
      Swal.fire({
        title: 'Registro exitoso',
        text: 'El usuario ha sido registrado exitosamente.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });

    } catch (error) {
      console.error('Error registering user:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error registrando al usuario.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      {/* Primer bloque */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold">Información Personal</h2>
        <div className="space-y-2">
          <div>
            <label className="block">Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block">Apellidos:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block">Foto de Perfil:</label>
            <input
              type="file"
              name="profilePhoto"
              onChange={handlePhotoChange}
              className="border p-2 rounded w-full"
              accept="image/*"
              // required
            />
          </div>
          <div>
            <label className="block">Edad:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block">Altura (cm):</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block">Peso (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block">Número de Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
        </div>
      </div>

      {/* Segundo bloque */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold">Preferencias Alimentarias</h2>
        <div className="space-y-2">
          <div>
            <label className="block">Alergias:</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block">Alimentos que no te gustan:</label>
            <input
              type="text"
              name="dislikes"
              value={formData.dislikes}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block">Número de veces al día que te gustaría comer:</label>
            <input
              type="number"
              name="mealsPerDay"
              value={formData.mealsPerDay}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
      </div>

      {/* Tercer bloque */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold">Observaciones</h2>
        <div>
          <label className="block">Observaciones:</label>
          <textarea
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Botón de envío */}
      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Registrarse
        </button>
      </div>
    </form>
  );
}
