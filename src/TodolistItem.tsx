import type { TodolistItemProps } from "./types";
import { Task } from "./Task";
import { Button } from "./Button";
import { useState } from "react";

export const TodolistItem = ({
    title,
    tasks,
    deleteTask,
    changeFilter,
    createTask,
}: TodolistItemProps) => {
    
	const [taskInput, setTaskInput] = useState("");

    const listItems =
        tasks.length === 0
            ? "Enter your first task"
            : tasks.map((t) => {
                  return (
                      <Task
                          key={t.id}
                          id={t.id}
                          isDone={t.isDone}
                          title={t.title}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
                      />
                  );
              });

    return (
        <div className="lists">
            <div className="list-content">
                <h3>{title}</h3>
                <div className="input-form">
                    <input className="input-form" value={taskInput} />
                    <Button title="Add" onClick={() => createTask("new")} />
                </div>
                <ul>{listItems}</ul>
            </div>
            <div className="buttons_bottom">
                <Button title="All" onClick={() => changeFilter("all")} />
                <Button title="Active" onClick={() => changeFilter("active")} />
                <Button
                    title="Completed"
                    onClick={() => changeFilter("completed")}
                />
            </div>
        </div>
    );
};
