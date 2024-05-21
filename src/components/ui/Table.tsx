import React from 'react';
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
                className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
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
            <React.Fragment key={index}>
              <tr {...row.getRowProps()} className="bg-white">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                      (cell.column as any).onClick ? 'cursor-pointer hover:text-blue-500' : ''
                    }`}
                    onClick={() => {
                      if ((cell.column as any).onClick) {
                        (cell.column as any).onClick(row.original);
                      }
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
