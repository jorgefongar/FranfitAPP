import React from 'react';
import Badge from './EstadoRevision'; // Importa el componente Badge aquí
import {Button} from './Button.tsx'
import { useTable, Column } from 'react-table';

interface TableProps {
  columns: Column<any>[];
  data: any[];
}

function Table({ columns, data }: TableProps) {
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
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="bg-white border-b">
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  className="px-4 py-2 whitespace-nowrap text-sm text-gray-500"
                >
                  {/* Verifica si la columna es 'review' para mostrar el Badge */}
                  {cell.column.id === 'review' ? (
                    <Badge status={cell.value} />
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                
                  <Button type='submit'>ACCEDER</Button>
                
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
