import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Table from '../components/ui/TableRevision';
import NavigationBlockuser from '../shared/layout/nav';
import Badge from "../components/ui/EstadoRevision";

const navigation = [
  { name: 'Revisiones', href: '#', current: false },
  { name: 'Clientes', href: '#', current: false },
  { name: 'Pagos', href: '#', current: false },
  
];
const columns = [
  {
    Header: 'Foto',
    accessor: 'photo'
  },
  {
    Header: 'Nombre',
    accessor: 'name',
    onClick: (row) => console.log(`Clicked ${row.name}`)
  },
  {
    Header: 'Fecha',
    accessor: 'date',
    onClick: (row) => console.log(`Clicked ${row.name}`)
  },
  {
    Header: 'Estado',
    accessor: 'review',
    onClick: (row) => console.log(`Clicked ${row.review}`),

  },
];

const initialData = [
  { photo: 'foto1.jpg', name: 'John Doe',date:'01/01/2024', weightIcon: 'icon1', review: 'Check', status: 'Activo', info: 'Info1' },
  { photo: 'foto2.jpg', name: 'Jane Smith',date:'01/01/2024', weightIcon: 'icon2', review: 'pendiente', status: 'Inactivo', info: 'Info2' },
  // Agrega más filas según sea necesario
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReview, setSelectedReview] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const filteredData = initialData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(item =>
    selectedReview ? item.review === selectedReview : true
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key === '') {
      return 0;
    }
    const aValue = a[sortConfig.key].toLowerCase();
    const bValue = b[sortConfig.key].toLowerCase();
    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const handleSortChange = (e) => {
    const { value } = e.target;
    let direction = 'ascending';
    if (sortConfig.key === value && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key: value, direction });
  };

  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      <div className="p-4">
        <div className="mb-4 flex space-x-4">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            name="review"
            value={selectedReview}
            onChange={(e) => setSelectedReview(e.target.value)}
            className="border p-6 rounded"
          >
            <option value="">Estado</option>
            <option value="Check">Check</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En espera">En espera</option>
          </select>
          
        </div>
        <Table columns={columns} data={sortedData} />
      </div>
    </div>
  );
}
