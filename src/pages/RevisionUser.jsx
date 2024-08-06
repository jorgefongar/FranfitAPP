import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/apiService';
import NavigationBlockuser from '../shared/layout/nav';
import UserInfo from '../components/ui/UserInfo';
import Medidas from '../components/ui/Medidas';
import TwoDimensionalChart from '../components/ui/TwoDimensionalChart';

const navigation = [
  { name: 'Revisiones', href: '/RevisionesLista', current: false },
  { name: 'Pagos', href: '#', current: false },
  { name: 'Cliente', href: '/Admin', current: false },
];

export default function RevisionUser() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [oldDate, setOldDate] = useState('');
  const [newDate, setNewDate] = useState('');
  const [oldData, setOldData] = useState(null);
  const [newData, setNewData] = useState(null);
  const [revisionStatus, setRevisionStatus] = useState('Pendiente');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [newPhotos, setNewPhotos] = useState({
    frontal: null,
    perfil: null,
    espalda: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserById(userId);
        setUserInfo({
          name: `${user.first_name} ${user.last_name}`,
          age: user.age || 30,
          height: user.height + " cm" || '180 cm',
          gender: user.gender || 'Masculino',
          email: user.email,
          photo: user.avatar || 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
        });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchData();
  }, [userId]);

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

  const handlePhotoClick = (url) => {
    setSelectedPhoto(url);
  };

  const handleNewPhotoChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPhotos((prev) => ({ ...prev, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      <div className="p-4">
        {userInfo && <UserInfo user={userInfo} />}
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
                <img
                  key={index}
                  src={`https://png.pngtree.com/background/20230922/original/pngtree-muscular-man-torso-fashion-healthy-man-photo-picture-image_5174568.jpg${index + 1}`}
                  alt={`Frontal${index + 1}`}
                  className="mb-2 cursor-pointer w-24 h-24 object-cover"
                  onClick={() => handlePhotoClick(`https://png.pngtree.com/background/20230922/original/pngtree-muscular-man-torso-fashion-healthy-man-photo-picture-image_5174568.jpg${index + 1}`)}
                />
              ))}
            </div>
            <div>
              <div>Perfil</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://st4.depositphotos.com/10313122/22691/i/450/depositphotos_226918840-stock-photo-full-body-shot-of-profile.jpg${index + 1}`}
                  alt={`Perfil${index + 1}`}
                  className="mb-2 cursor-pointer w-24 h-24 object-cover"
                  onClick={() => handlePhotoClick(`https://st4.depositphotos.com/10313122/22691/i/450/depositphotos_226918840-stock-photo-full-body-shot-of-profile.jpg${index + 1}`)}
                />
              ))}
            </div>
            <div>
              <div>Espalda</div>
              {Array.from({ length: 1 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/cue_0019.jpg?itok=53KHoUfd${index + 1}`}
                  alt={`Espalda${index + 1}`}
                  className="mb-2 cursor-pointer w-24 h-24 object-cover"
                  onClick={() => handlePhotoClick(`https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/cue_0019.jpg?itok=53KHoUfd${index + 1}`)}
                />
              ))}
            </div>
          </div>
          <div className="w-1/3">
            <label className="block mb-2">Fotos nuevas:</label>
            <div>
              <div>Frontal</div>
              <input type="file" onChange={(e) => handleNewPhotoChange(e, 'frontal')} className="mb-2" />
              {newPhotos.frontal && (
                <img
                  src={newPhotos.frontal}
                  alt="Frontal nueva"
                  className="mb-2 cursor-pointer w-24 h-24 object-cover"
                  onClick={() => handlePhotoClick(newPhotos.frontal)}
                />
              )}
            </div>
            <div>
              <div>Perfil</div>
              <input type="file" onChange={(e) => handleNewPhotoChange(e, 'perfil')} className="mb-2" />
              {newPhotos.perfil && (
                <img
                  src={newPhotos.perfil}
                  alt="Perfil nueva"
                  className="mb-2 cursor-pointer w-24 h-24 object-cover"
                  onClick={() => handlePhotoClick(newPhotos.perfil)}
                />
              )}
            </div>
            <div>
              <div>Espalda</div>
              <input type="file" onChange={(e) => handleNewPhotoChange(e, 'espalda')} className="mb-2" />
              {newPhotos.espalda && (
                <img
                  src={newPhotos.espalda}
                  alt="Espalda nueva"
                  className="mb-2 cursor-pointer w-24 h-24 object-cover"
                  onClick={() => handlePhotoClick(newPhotos.espalda)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <select value={revisionStatus} onChange={handleRevisionStatusChange} className="border py-3 px-5 rounded mr-4">
            <option value="check">Check</option>
            <option value="pendiente">Pendiente</option>
            <option value="espera">En espera</option>
          </select>
          <button onClick={handleFinishRevision} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
            Finalizar revisión
          </button>
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <img src={selectedPhoto} alt="Selected" className="max-w-full max-h-screen" />
            <button onClick={closeModal} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
