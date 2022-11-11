import { FC, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  ExpandedState,
} from '@tanstack/react-table';
import tableStyle from './Table.module.css';

interface ITableProps {
  defaultData: object[];
  columnsData: any[];
  rowHeight: number;
  renderSubComponent?: ({ row }: { row: object }) => React.ReactNode;
  getRowCanExpand: () => boolean;
  initialExpandedRows?: {
    [key: string]: boolean;
  };
}

type TTableProps = ITableProps;

export const Table: FC<TTableProps> = ({
  defaultData,
  columnsData,
  rowHeight,
  renderSubComponent,
  getRowCanExpand,
  initialExpandedRows,
}) => {
  const [data] = useState(() => [...defaultData]);
  const [expanded, setExpanded] = useState<ExpandedState>(initialExpandedRows || {});
  const table = useReactTable({
    data,
    columns: columnsData,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className={tableStyle.table__container}>
      <table className={`${tableStyle.table} text_type_main-default`}>
        <thead className={tableStyle.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={`${tableStyle.table__header}`}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={tableStyle.table__cell}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={tableStyle.tbody}>
          {table.getRowModel().rows.map((row) => (
            <>
              <tr
                key={row.id}
                className={`${tableStyle.header__row} ${
                  renderSubComponent ? tableStyle.table__row_cursorPointer : ''
                }`}
                data-row={rowHeight}
                onClick={row.getCanExpand() ? row.getToggleExpandedHandler() : () => {}}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
              {renderSubComponent && row.getIsExpanded() && (
                <tr>
                  <td
                    colSpan={row.getVisibleCells().length}
                    className={tableStyle.table__cell_subComponents}
                  >
                    {renderSubComponent({ row })}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
