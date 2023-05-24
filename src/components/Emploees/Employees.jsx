import React from "react";
import Table from "./Table/Table";
import API from "../../api/fake.api";

const Employees = () => {
  const usersLength = API.users.fetchAll().length;

  return (
    <>
      <div>Общая база сотрудников</div>
      <div>{usersLength} Контакта</div>
      <Table />
    </>
  );
};

export default Employees;
