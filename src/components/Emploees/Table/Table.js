import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import API from "../../../api/fake.api";
import s from "./Table.module.css";

const Table = () => {
  const [users, setUsers] = useState(() => API.users.fetchAll());

  const columns = React.useMemo(
    () => [
      { Header: "#", accessor: (row, index) => index + 1 },
      { Header: "Имя сотрудника", accessor: "name" },
      { Header: "ID номер", accessor: "employeeId" },
      { Header: "Телефон", accessor: "phone" },
      { Header: "Пол", accessor: "gender" },
      { Header: "Дата рождения", accessor: "birthDate" },
      { Header: "Метро", accessor: "metro" },
      { Header: "Адрес проживания", accessor: "address" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: users,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div>
      <table className={s.styled__table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={s.pagination}>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={s.pagination__button}
        >
          Назад
        </button>{" "}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={s.pagination__button}
        >
          Вперед
        </button>{" "}
        <span>
          Страница{" "}
          <strong>
            {pageIndex + 1} из {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Перейти на страницу:{" "}
          <input
            type="number"
            value={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? parseInt(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
      </div>
    </div>
  );
};

export default Table;
