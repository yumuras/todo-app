import React from "react";
import { useState } from "react";
import { Todo } from "../atoms/Todo";
import type { todo } from "../../types/types";

export const Todos = () => {
  const [todos, setTodos] = useState<string>("");
  const [tasks, setTasks] = useState<todo[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(e.target.value);
  };
  const handleClick = () => {
    if (todos === "") return;
    const newTodo: todo = {
      name: todos,
      checked: false,
      id: new Date().getTime(),
    };
    setTasks([...tasks, newTodo]);
    setTodos("");
  };
  const handleDelete = (id: number, e: any) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleTask = <K extends keyof todo, V extends todo[K]>(
    id: number,
    key: K,
    value: V,
  ) => {
    setTasks((tasks) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, [key]: value };
        }
        return task;
      });
      return newTasks;
    });
  };
  console.log(tasks);
  return (
    <div>
      <input type="text" value={todos} onChange={handleChange} />
      <button onClick={handleClick}>追加</button>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {tasks.map((task: todo, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleTask(task.id, "checked", !task.checked)}
            />
            <input
              type="text"
              disabled={task.checked}
              value={task.name}
              onChange={(e) => handleTask(task.id, "name", e.target.value)}
            />
            <button onClick={(e) => handleDelete(task.id, e)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
