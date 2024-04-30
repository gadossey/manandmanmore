import React from "react";
import { useTable, useBlockLayout } from "react-table";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData // This is a custom function that we supplied to our table instance
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

const EditableTable = ({ columns, data, updateMyData }) => {
  const defaultColumn = React.useMemo(
    () => ({
      Cell: EditableCell
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateMyData
    },
    useBlockLayout
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EditableTable;
