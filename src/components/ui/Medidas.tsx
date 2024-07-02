import React from 'react';

const iconStyle = { width: 25, height: 25 };

const Medidas = ({ oldData, newData, oldDate, newDate }) => {
  const getComparisonIcon = (oldValue, newValue) => {

    if (newValue > oldValue) {

      return <svg xmlns="http://www.w3.org/2000/svg" {...iconStyle} fill="green" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
      </svg>; // Icono de Bootstrap para "mayor que"
    } else if (newValue < oldValue) {
      return <svg xmlns="http://www.w3.org/2000/svg" {...iconStyle} fill="red" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
      </svg>; // Icono de Bootstrap para "menor que"
    } else {
      return <svg xmlns="http://www.w3.org/2000/svg" {...iconStyle} fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      </svg>; // Icono de Bootstrap para "igual a"
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb4 " style={{ width: '400px' }}>
      <h3 className="text-lg font-bold mb-2">Medidas Comparativas</h3>
      <table className="  divide-gray-400">
        <thead>
          <tr >
            <th className="px-1 py-2 bg-gray-50 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Medida</th>
            <th className="px-1 py-2 bg-gray-50 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">{oldDate}</th>
            <th className="px-1 py-2 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
            <th className="px-1 py-2 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{newDate}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Peso Corporal</td>
            <td className="px-1 py-2 whitespace-nowrap text-xl text-right text-gray-500">{oldData.pesoCorporal}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.pesoCorporal, newData.pesoCorporal)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-xl text-gray-500">{newData.pesoCorporal}</td>
          </tr>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">IMB</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">se calcula</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.cuello, newData.cuello)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">se calcula</td>
          </tr>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Cintura</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">{oldData.cintura}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.cintura, newData.cintura)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{newData.cintura}</td>
          </tr>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Abdomen</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">{oldData.abdomen}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.abdomen, newData.abdomen)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{newData.abdomen}</td>
          </tr>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Cadera</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">{oldData.cadera}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.cadera, newData.cadera)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{newData.cadera}</td>
          </tr>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Bíceps</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">{oldData.biceps}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.biceps, newData.biceps)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{newData.biceps}</td>
          </tr>

          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Pierna</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">{oldData.pierna}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.pierna, newData.pierna)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{newData.pierna}</td>
          </tr>
          <tr className="divide-y divide-x divide-gray-200">
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">Cuello</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-right text-gray-500">{oldData.cuello}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{getComparisonIcon(oldData.cuello, newData.cuello)}</td>
            <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">{newData.cuello}</td>
          </tr>


        </tbody>
      </table>
    </div>
  );
};

export default Medidas;

