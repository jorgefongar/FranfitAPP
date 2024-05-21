import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <h2 className="text-lg font-bold mb-2">Información General del Usuario</h2>
      <div className="flex items-center">
        <img src={user.photo} alt={`${user.name}'s profile`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Edad:</strong> {user.age}</p>
          <p><strong>Altura:</strong> {user.height}</p>
          <p><strong>Género:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;