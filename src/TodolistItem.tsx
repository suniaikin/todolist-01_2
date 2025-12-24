import type { TodolistItemProps } from "./types";
import { Task } from "./Task";
import { Button } from "./Button";
import { useRef } from "react";

export const TodolistItem = ({
    title,
    tasks,
    deleteTask,
    changeFilter,
    createTask,
}: TodolistItemProps) => {
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

    const taskInputRef = useRef<HTMLInputElement>(null);

    const createHandler = () => {
        if (taskInputRef.current) {
            createTask(taskInputRef.current.value);
            taskInputRef.current.value = "";
        }
    };

    return (
        <div className="lists">
            <div className="list-content">
                <h3>{title}</h3>
                <div className="input-form">
                    <input className="input-form" ref={taskInputRef} />
                    <Button title="Add" onClick={createHandler} />
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
