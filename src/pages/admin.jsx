import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Table from '../components/ui/Table.tsx';
import NavigationBlockuser from '../shared/layout/nav';

const navigation = [
  { name: 'Revisiones', href: '/RevisionesLista', current: false },
  { name: 'Clientes', href: '/Admin', current: false },
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
    Header: 'Revisión',
    accessor: 'review',
    onClick: (row) => console.log(`Clicked ${row.review}`)
  },
  {
    Header: 'Estado',
    accessor: 'status',
    Cell: ({ value }) => (
      <span className={value === 'Activo' ? 'text-green-500' : 'text-red-500'}>
        {value}
      </span>
    )
  },
  {
    Header: 'Info',
    accessor: 'info',
    Cell: ({ row }) => (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log(`Acceder ${row.original.info}`)}
      >
        Acceder
      </button>
    )
  }
];

const data = [
  { photo: 'foto1.jpg', name: 'John Doe', review: 'Aprobada', status: 'Activo', info: 'Info1' },
  { photo: 'foto2.jpg', name: 'Jane Smith', review: 'Pendiente', status: 'Inactivo', info: 'Info2' },
  // Agrega más filas según sea necesario
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      
      <div className="p-4 flex justify-center">
        <div className="w-full">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
