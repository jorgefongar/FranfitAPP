import React from 'react';

export default function Badge({ status }) {
  let colorClass = '';
  let text = '';

  switch (status.toLowerCase()) {
    case 'check':
      colorClass = 'bg-green-50 text-green-700 ring-green-600/20';
      text = 'Check';
      break;
    case 'pendiente':
      colorClass = 'bg-yellow-50 text-yellow-800 ring-yellow-600/20';
      text = 'Pendiente';
      break;
    case 'en espera':
      colorClass = 'bg-red-50 text-red-700 ring-red-600/20';
      text = 'En espera';
      break;
    default:
      colorClass = 'bg-gray-50 text-gray-600 ring-gray-500/10';
      text = 'Estado desconocido';
  }

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colorClass}`}>
      {text}
    </span>
  );
}
