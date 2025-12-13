import { Button } from "./Button";
import { Task } from "./types";
import { FilterValuesType } from "./types";
import { useState } from "react";

type PropsType = {
    title: string;
    tasks: Task[];
    filter: FilterValuesType;
    deleteTask: (taskId: Task["id"]) => void;
    changeFilter: (filter: FilterValuesType) => void;
    createTask: (title: Task["title"]) => void;
    changeTaskStatus: (
        taskId: Task["id"],
        newTaskStatus: Task["isDone"]
    ) => void;
};

export const TodolistItem = ({
    tasks,
    title,
    filter,
    deleteTask,
    changeFilter,
    createTask,
    changeTaskStatus,
}: PropsType) => {
    const listItems = tasks.map((t) => {
        const deleteTaskHandler = () => deleteTask(t.id);
        return (
            <li key={t.id} className={t.isDone ? "task done" : "task"}>
                <input
                    type="checkbox"
                    onChange={(e) =>
                        changeTaskStatus(t.id, e.currentTarget.checked)
                    }
                    checked={t.isDone}
                />
                <span>{t.title}</span>
                <Button label="x" onClickHandler={deleteTaskHandler} />
            </li>
        );
    });

    const [taskInput, setTaskInput] = useState("");
    const [error, setError] = useState(false);

    const tasksList =
        tasks.length === 0 ? <p>No tasks available</p> : <ul>{listItems}</ul>;

    const createTaskHandler = () => {
        const trimmedInput = taskInput.trim();
        if (trimmedInput) {
            createTask(taskInput);
        } else {
            setError(true);
        }
        setTaskInput("");
    };

    return (
        <div className="lists">
            <div className="list-content">
                <h3>{title}</h3>
                <div className="input-form">
                    <input
                        placeholder="Enter task title"
                        value={taskInput}
                        onChange={(e) => {
                            error && setError(false);
                            if (e.currentTarget.value.length <= 10)
                                setTaskInput(e.currentTarget.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                createTaskHandler();
                            }
                        }}
                        className={error ? "input-error" : ""}
                    />
                    <Button
                        label="+"
                        disabled={
                            taskInput.length === 0 || taskInput.length > 10
                        }
                        onClickHandler={createTaskHandler}
                        className="add-button"
                    />
                    <div className="limits-notification">
                        {taskInput && taskInput.length < 10 && (
                            <div>Title must be less than 10 characters</div>
                        )}
                        {taskInput && taskInput.length >= 10 && (
                            <div style={{ color: "red" }}>
                                Title is alreyady too long!
                            </div>
                        )}
                        {error && (
                            <div style={{ color: "red" }}>input a word!</div>
                        )}
                    </div>
                </div>
                <ul>{tasksList}</ul>
            </div>

            <div className="buttons_bottom">
                <Button
                    label="All"
                    onClickHandler={() => changeFilter("all")}
                    className={filter === "all" ? "btn-filter-active" : "btn"}
                />
                <Button
                    label="Active"
                    onClickHandler={() => changeFilter("active")}
                    className={
                        filter === "active" ? "btn-filter-active" : "btn"
                    }
                />
                <Button
                    label="Completed"
                    onClickHandler={() => changeFilter("completed")}
                    className={
                        filter === "completed" ? "btn-filter-active" : "btn"
                    }
                />
            </div>
        </div>
    );
};
