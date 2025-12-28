import type { TodolistItemProps } from "./types";
import { Task } from "./Task";
import { Button } from "./Button";
import { useState } from "react";

const MAX_SYMBOLS = 10;
const forbiddenWords = ["shit", "fuck"];

export const TodolistItem = ({
    title,
    tasks,
    deleteTask,
    changeFilter,
    createTask,
    onChangeStatus,
}: TodolistItemProps) => {
    const [taskInput, setTaskInput] = useState("");

    let hasForbiddenWord = forbiddenWords.some((word) =>
        taskInput.toLowerCase().includes(word)
    );

    const handleAddClick = () => {
        createTask(taskInput.trim());
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
                        className="input-form"
                        onChange={(e) => setTaskInput(e.currentTarget.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && taskInputRequirements
                                ? handleAddClick()
                                : ""
                        }
                    />
                    <Button
                        title="Add"
                        onClick={handleAddClick}
                        isDsabled={
                            !taskInput ||
                            taskInput.length > MAX_SYMBOLS ||
                            hasForbiddenWord
                        }
                    />
                    <div className="input-note">
                        {!taskInput && (
                            <span>
                                Max title length is {MAX_SYMBOLS} charters
                            </span>
                        )}
                        {taskInput.length > MAX_SYMBOLS &&
                            !taskInput.includes(" ") && (
                                <span style={{ color: "red" }}>
                                    The title length is too long
                                </span>
                            )}
                        {taskInputRequirements && !hasForbiddenWord && (
                            <span>
                                Your tiltle lenght is {taskInput.length}
                            </span>
                        )}

                        {hasForbiddenWord && (
                            <span style={{ color: "red" }}>
                                You've entered a forbidden word!
                            </span>
                        )}
                    </div>
                </div>

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
                                  />
                              );
                          })}
                </ul>
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
