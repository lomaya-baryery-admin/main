import { FC, useState } from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import tableStyle from './Table.module.css';

interface ITableProps {
  defaultData: object[];
  columnsData: any[];
  rowHeight: number;
}

type TTableProps = ITableProps;

export const Table: FC<TTableProps> = ({ defaultData, columnsData, rowHeight }) => {
  const [data] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns: columnsData,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className={tableStyle.table__container}>
      <table className={`${tableStyle.table} text_type_main-default`}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={`${tableStyle.table__header}`}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={`${tableStyle.header__row}`} data-row={rowHeight}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
