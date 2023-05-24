import React from "react";
import Table from "./Table/Table";
import API from "../../api/fake.api";
import s from "../Emploees/Employees.module.css";

const Employees = () => {
  const usersLength = API.users.fetchAll().length;

  return (
    <div className={s.emploees__wrapper}>
      <div>Общая база сотрудников</div>
      <div>{usersLength} Контакта</div>
      <Table />
    </div>
  );
};

export default Employees;
