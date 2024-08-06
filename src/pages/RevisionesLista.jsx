import React, { useState, useEffect } from 'react';
import { fetchRevisionesWithUsers } from '../controllers/revisionController';
import NavigationBlockuser from '../shared/layout/nav';
import Table from '../components/ui/TableRevision';
import Badge from "../components/ui/EstadoRevision";

const navigation = [
  { name: 'Revisiones', href: '/RevisionesLista', current: false },
  { name: 'Clientes', href: '/Admin', current: false },
  { name: 'Pagos', href: '#', current: false },
];

const columns = [
  {
    Header: 'Foto',
    accessor: 'photo',
  },
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Fecha',
    accessor: 'date',
  },
  {
    Header: 'Estado',
    accessor: 'review',
  },
];

export default function Example() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReview, setSelectedReview] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const revisiones = await fetchRevisionesWithUsers();
        setData(revisiones.map(revision => ({
          photo: 'foto-placeholder.jpg',
          name: `${revision.user.first_name} ${revision.user.last_name}`,
          date: revision.fecha_revision,
          review: revision.status,
          userId: revision.user_id, // Asegúrate de que el userId esté presente
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(item =>
    selectedReview ? item.review === selectedReview : true
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key === '') {
      return 0;
    }
    const aValue = a[sortConfig.key]?.toLowerCase() || '';
    const bValue = b[sortConfig.key]?.toLowerCase() || '';
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
            className="border p-2 rounded"
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
