import { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from "../GlobalFilter";

const StudentList = ({ students }) => {

    const data = useMemo(() => students, [])

    const columns = useMemo(() => ([
        {
            Header: "#",
            Footer: "#",
            accessor: "id"
        },
        {
            Header: "Name",
            Footer: "Name",
            accessor: "name"
        },
        {
            Header: "Number",
            Footer: "Number",
            accessor: "number"
        },
        {
            Header: "Marks",
            Footer: "Marks",
            accessor: "marks"
        },
        {
            Header: "Major",
            Footer: "Major",
            accessor: "major"
        },
        {
            Header: "Minor",
            Footer: "Minor",
            accessor: "minor"
        }
    ]), [])

    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy )  // pass the columns and data to REACT table

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance
    // extract some data from the table instance

    const { globalFilter } = state

    return (
        <div className="container">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table className="table table-striped" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '⬇️' : '⬆️') : ''}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    {
                        footerGroups.map((footerGroup) => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map((column) => (
                                        <td {...column.getFooterProps}>
                                            {
                                                column.render('Footer')
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </div>
    )

}

export default StudentList;