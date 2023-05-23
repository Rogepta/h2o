import React, { useState } from "react";
import s from "./TodoList.module.css";

const Todolist = (props) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onNewTitleChangeHandler = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const onKeyPressHandler = (e) => {
    if (e.charCode === 13) {
      addTask();
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const onRemoveTaskHandler = (id) => {
    props.removeTask(id);
  };

  const onAllClickHandler = () => {
    props.changeFilter("all");
  };

  const onActiveClickHandler = () => {
    props.changeFilter("active");
  };

  const onCompletedClickHandler = () => {
    props.changeFilter("completed");
  };

  return (
    <div className={s.container__todo}>
      <div className={s.todoList}>
        <h3>{props.title}</h3>
        <div className={s.input__button}>
          <input
            value={newTaskTitle}
            onChange={onNewTitleChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={s.input__todo__add}
            placeholder="Идеи и предложения"
          />
          <button onClick={addTask} className={s.input__button__add}>
            Добавить
          </button>
        </div>
        <ul>
          {props.tasks.map((t) => (
            <li key={t.id}>
              <div className={s.input__span}>
                <input
                  type="checkbox"
                  checked={t.isDone}
                  onChange={() => props.toggleTaskStatus(t.id)}
                  className={s.input__todo__checkbox}
                />

                <span className={s.input__checkbox__title}>{t.title}</span>
              </div>
              <button
                onClick={() => onRemoveTaskHandler(t.id)}
                className={s.input__button__delete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className={s.filtration}>
          <button onClick={onAllClickHandler} className={s.filtration__button}>
            All
          </button>
          <button
            onClick={onActiveClickHandler}
            className={s.filtration__button}
          >
            Active
          </button>
          <button
            onClick={onCompletedClickHandler}
            className={s.filtration__button}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
