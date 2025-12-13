import { Button } from "./Button";
import { TasksType } from "./types";
import { FilterValuesType } from "./types";
import { useRef } from "react";

type TodolistItemProps = {
    title: string;
    tasks: TasksType[];
    deleteTask: (taskId: TasksType["id"]) => void;
    changeFilter: (filter: FilterValuesType) => void;
    createTask: (title: TasksType["title"]) => void;
};

export const TodolistItem = ({
    tasks,
    title,
    deleteTask,
    changeFilter,
    createTask,
}: TodolistItemProps) => {
    const listItems = tasks.map((task) => {
        const deleteTaskHandler = () => deleteTask(task.id);
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button label="x" onClickHandler={deleteTaskHandler} />
            </li>
        );
    });

    const taskInputRef = useRef<HTMLInputElement>(null);

    const tasksList =
        tasks.length === 0 ? <p>No tasks available</p> : <ul>{listItems}</ul>;

    return (
        <div className="lists">
            <h3>{title}</h3>
            <div>
                <input ref={taskInputRef} />
                <Button
                    label="+"
                    onClickHandler={() => {
                        if (taskInputRef.current) {
                            createTask(taskInputRef.current.value);
                            taskInputRef.current.value = "";
                        }
                    }}
                />
            </div>
            <ul>{tasksList}</ul>
            <div>
                <Button
                    label="All"
                    onClickHandler={() => changeFilter("all")}
                />
                <Button
                    label="Active"
                    onClickHandler={() => changeFilter("active")}
                />
                <Button
                    label="Completed"
                    onClickHandler={() => changeFilter("completed")}
                />
            </div>
        </div>
    );
};
