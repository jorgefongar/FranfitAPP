import React from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from './EstadoRevision';
import { Button } from '../../shared/components/Button';
import { useTable, Column } from 'react-table';

interface TableProps {
  columns: Column<any>[];
  data: any[];
}

function Table({ columns, data }: TableProps) {
  const navigate = useNavigate();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  const handleAccederClick = (userId: string) => {
    navigate(`/RevisionUserAdmin/${userId}`);
  };

  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="px-4 py-2 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="bg-white border-b">
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  className="px-4 py-2 whitespace-nowrap text-sm text-gray-500"
                >
                  {cell.column.id === 'review' ? (
                    <Badge status={cell.value} />
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                <Button
                  type='submit'
                  onClick={() => handleAccederClick(row.original.userId)}
                >
                  ACCEDER
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
