import type { Props } from "./types";
import { Task } from "./Task";
import { Button } from "./Button";
import { useState } from "react";

const MAX_SYMBOLS = 10;
const forbiddenWords = ["shit", "fuck"];

export const TodoList = ({
    title,
    tasks,
    filter,
    deleteTask,
    changeFilter,
    createTask,
    onChangeStatus,
}: Props) => {
    const [taskInput, setTaskInput] = useState("");
    const [error, setError] = useState(false);

    let hasForbiddenWord = forbiddenWords.some((word) =>
        taskInput.toLowerCase().includes(word)
    );

    const handleAddClick = () => {
        const trimmedTitle = taskInput.trim();
        if (trimmedTitle) {
            createTask(trimmedTitle);
        } else {
            setError(true);
        }

        setTaskInput("");
    };

    const taskInputRequirements = taskInput && taskInput.length <= MAX_SYMBOLS;

    return (
        <div className="lists">
            <div className="list-content">
                <h3>{title}</h3>
                <div className="input-form">
                    <input
                        value={taskInput}
                        className={error ? "input-error" : "input-form"}
                        onChange={(e) => {
                            error && setError(false);
                            setTaskInput(e.currentTarget.value);
                        }}
                        onKeyDown={(e) => {
                            if (
                                e.key === "Enter" &&
                                taskInputRequirements &&
                                !hasForbiddenWord
                            ) {
                                handleAddClick();
                            }
                        }}
                    />
                    <Button
                        title="Add"
                        onClickHandler={handleAddClick}
                        isDisabled={
                            !taskInput ||
                            taskInput.length > MAX_SYMBOLS ||
                            hasForbiddenWord
                        }
                    />
                    <div className="input-note">
                        {!error && !taskInput && (
                            <span>
                                Max title length is {MAX_SYMBOLS} characters
                            </span>
                        )}
                        {taskInput.length > MAX_SYMBOLS && (
                            <span style={{ color: "red" }}>
                                The title length is too long
                            </span>
                        )}
                        {taskInputRequirements && !hasForbiddenWord && (
                            <span>Your title length is {taskInput.length}</span>
                        )}

                        {hasForbiddenWord && (
                            <span style={{ color: "red" }}>
                                You've entered a forbidden word!
                            </span>
                        )}

                        {error && (
                            <span style={{ color: "red" }}>
                                Please enter a valid title
                            </span>
                        )}
                    </div>
                </div>
                <span>{filter}</span>

                <ul className="list-tasks">
                    {tasks.length === 0
                        ? "Enter your first task"
                        : tasks.map((t) => {
                              return (
                                  <Task
                                      key={t.id}
                                      id={t.id}
                                      isDone={t.isDone}
                                      title={t.title}
                                      deleteTask={deleteTask}
                                      onChangeStatus={onChangeStatus}
                                      className={
                                          t.isDone ? "task-done" : "task"
                                      }
                                  />
                              );
                          })}
                </ul>
            </div>
            <div className="buttons_bottom">
                <Button
                    title="All"
                    onClickHandler={() => changeFilter("all")}
                    customClass={filter === "all" ? "filter-btn-active" : "btn"}
                />
                <Button
                    title="Active"
                    onClickHandler={() => changeFilter("active")}
                    customClass={
                        filter === "active" ? "filter-btn-active" : "btn"
                    }
                />
                <Button
                    title="Completed"
                    onClickHandler={() => changeFilter("completed")}
                    customClass={
                        filter === "completed" ? "filter-btn-active" : "btn"
                    }
                />
            </div>
        </div>
    );
};
