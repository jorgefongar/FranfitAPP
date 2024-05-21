
import React, { useState } from 'react';
import NavigationBlockuser from './components/ui/nav';
import UserInfo from './components/ui/UserInfo';
import Medidas from './components/ui/Medidas';
import TwoDimensionalChart from './components/ui/TwoDimensionalChart';


const navigation = [
  { name: 'Revisiones', href: '#', current: false },
  { name: 'Pagos', href: '#', current: false },
  { name: 'Cliente', href: '#', current: false },
];

const medidas = [
  { label: 'Peso', value: 70 },
  { label: 'Bíceps', value: 30 },
  { label: 'Cintura', value: 80 },
  { label: 'Cadera', value: 90 },
  { label: 'Abdomen', value: 85 },
  { label: 'Cuello', value: 35 },
  { label: 'Pierna', value: 60 }
];
export default function Example() {
  const [userInfo] = useState({
    name: 'John Doe',
    age: 30,
    height: '180 cm',
    gender: 'Masculino',
    email: 'johndoe@example.com',
    photo: 'https://via.placeholder.com/150', // Reemplaza esto con la URL de la foto de perfil real
  });

  const [oldDate, setOldDate] = useState('');
  const [newDate, setNewDate] = useState('');
  const [oldData, setOldData] = useState(null);
  const [newData, setNewData] = useState(null);
  const [revisionStatus, setRevisionStatus] = useState('Pendiente'); // Estado de la revisión por defecto

  const handleOldDateChange = (e) => {
    setOldDate(e.target.value);
    // Simulación de datos antiguos
    setOldData({
      pesoCorporal: 80,
      cintura: 50,
      abdomen: 90,
      biceps: 35,
      cadera: 95,
      pierna: 60,
      cuello: 40,
      extraMeasurements: [10, 20, 30]
    });
  };

  const handleNewDateChange = (e) => {
    setNewDate(e.target.value);
    // Simulación de datos nuevos
    setNewData({
      pesoCorporal: 78,
      cintura: 50,
      abdomen: 88,
      biceps: 34,
      cadera: 93,
      pierna: 59,
      cuello: 39,
      extraMeasurements: [15, 18, 25]
    });
  };

  const handleRevisionStatusChange = (e) => {
    setRevisionStatus(e.target.value);
  };

  const handleFinishRevision = () => {
    // Lógica para finalizar la revisión
    console.log('Revisión finalizada');
  };

  return (
    <div>
       <NavigationBlockuser navigation={navigation} />
      <div className="p-4">
        <UserInfo user={userInfo} />
        <div className="flex justify-center mb-4">
          <div className="flex mr-4">
            <label className="block mb-2">Seleccionar fecha antigua:</label>
            <input
              type="date"
              value={oldDate}
              onChange={handleOldDateChange}
              className="border p-2 rounded ml-2"
            />
          </div>
          <div className="flex">
            <label className="block mb-2">Seleccionar fecha nueva:</label>
            <input
              type="date"
              value={newDate}
              onChange={handleNewDateChange}
              className="border p-2 rounded ml-2"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-1/3">
            {oldData && newData && (
              <Medidas oldData={oldData} newData={newData} oldDate={oldDate} newDate={newDate} />
            )}
          </div>
          <div className="w-1/3">
            <label className="block mb-2">Fotos antiguas:</label>
            <div>
              <div>Frontal</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Frontal${index + 1}`} alt={`Frontal${index + 1}`} className="mb-2" />
              ))}
            </div>
            <div>
              <div>Perfil</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Perfil${index + 1}`} alt={`Perfil${index + 1}`} className="mb-2" />
              ))}
            </div>
            <div>
              <div>Espalda</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Espalda${index + 1}`} alt={`Espalda${index + 1}`} className="mb-2" />
              ))}
            </div>
          </div>
          <div className="w-1/3">
            <label className="block mb-2">Fotos nuevas:</label>
            <div>
              <div>Frontal</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Frontal${index + 1}`} alt={`Frontal${index + 1}`} className="mb-2" />
              ))}
            </div>
            <div>
              <div>Perfil</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Perfil${index + 1}`} alt={`Perfil${index + 1}`} className="mb-2" />
              ))}
            </div>
            <div>
              <div>Espalda</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Espalda${index + 1}`} alt={`Espalda${index + 1}`} className="mb-2" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <select value={revisionStatus} onChange={handleRevisionStatusChange} className="border p-5 rounded mr-4">
            <option value="Check">Check</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En espera">En espera</option>
          </select>
          <button onClick={handleFinishRevision} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Finalizar revisión
          </button>
        </div>
      </div>
      
 
      
    </div>
  );
}
