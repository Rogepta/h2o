import React, { useState } from "react";
import { v1 } from "uuid";
import Todolist from "../Daily/TodoList/Todolist";

const Daily = () => {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "Calendar", isDone: true },
    { id: v1(), title: "TODO List", isDone: true },
    { id: v1(), title: "Basket", isDone: false },
    { id: v1(), title: "Employees 25%", isDone: false },
    { id: v1(), title: "Pastry", isDone: false },
    { id: v1(), title: "Diagrams", isDone: false },
    { id: v1(), title: "Settings", isDone: false },
    { id: v1(), title: "Fullstack project", isDone: false },
  ]);

  let [filter, setFilter] = useState("all");

  function removeTask(id) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeFilter(value) {
    setFilter(value);
  }

  function toggleTaskStatus(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  }

  let tasksForToDoList = tasks;
  if (filter === "completed") {
    tasksForToDoList = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForToDoList = tasks.filter((t) => t.isDone === false);
  }

  return (
      <Todolist
        title="Выполнено для тестового!"
        tasks={tasksForToDoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        toggleTaskStatus={toggleTaskStatus}
      />
  );
};

export default Daily;
