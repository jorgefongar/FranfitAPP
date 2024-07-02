import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Table from '../components/ui/Table.tsx';
import NavigationBlockuser from '../shared/layout/nav';


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
    Header: 'Icono Peso',
    accessor: 'weightIcon'
  },
  {
    Header: 'Revisión',
    accessor: 'review',
    onClick: (row) => console.log(`Clicked ${row.review}`)
  },
  {
    Header: 'Estado',
    accessor: 'status'
  },
  {
    Header: 'Info',
    accessor: 'info',
    onClick: (row) => console.log(`Clicked ${row.info}`)
  }
];

const data = [
  { photo: 'foto1.jpg', name: 'John Doe', weightIcon: 'icon1', review: 'Aprobada', status: 'Activo', info: 'Info1' },
  { photo: 'foto2.jpg', name: 'Jane Smith', weightIcon: 'icon2', review: 'Pendiente', status: 'Inactivo', info: 'Info2' },
  // Agrega más filas según sea necesario
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      
      <div className="p-4">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
