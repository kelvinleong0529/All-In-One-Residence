import { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from "../GlobalFilter";

const AnnouncementList = ({ announcement }) => {
  const data = useMemo(() => announcement, []);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Target",
        accessor: "target",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy); // pass the columns and data to REACT table

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  // extract some data from the table instance

  const { globalFilter } = state;

  return (
    <div className="container">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        
      </table>
    </div>
  );
};

export default AnnouncementList;
