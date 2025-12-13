import "./App.css";
import { TodolistItem } from "./TodolistItem";
import { Task } from "./types";
import { useState } from "react";
import { FilterValuesType } from "./types";
import { v1 } from "uuid";

export function App() {
    //BLL
    const todolistTitle_1: string = "What to learn";

    //state
    const [tasks, setTasks] = useState<Task[]>([
        { id: v1(), title: "Panera Bread", isDone: true },
        { id: v1(), title: "Starbucks", isDone: false },
        { id: v1(), title: "Olive Garden", isDone: false },
    ]);

    const deleteTask = (taskId: Task["id"]) => {
        const nextState: Task[] = tasks.filter((t) => t.id !== taskId);
        setTasks(nextState);
    };

    const createTask = (title: Task["title"]) => {
        const newTask: Task = {
            id: v1(),
            title: title,
            isDone: false,
        };
        const newState: Task[] = [...tasks, newTask];
        setTasks(newState);
    };

    const [filter, setFilter] = useState<FilterValuesType>("all");

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter);
    };

    const changeTaskStatus = (
        taskId: Task["id"],
        newTaskStatus: Task["isDone"]
    ) => {
        const nextState: Task[] = tasks.map((t) =>
            t.id === taskId ? { ...t, isDone: newTaskStatus } : t
        );
        setTasks(nextState);
    };

    const getFilteredTasks = (
        tasks: Task[],
        filter: FilterValuesType
    ): Task[] => {
        switch (filter) {
            case "active":
                return tasks.filter((t) => !t.isDone);
            case "completed":
                return tasks.filter((t) => t.isDone);
            default:
                return tasks;
        }
    };

    return (
        <div className="App">
            <TodolistItem
                filter={filter}
                title={todolistTitle_1}
                tasks={getFilteredTasks(tasks, filter)}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
                createTask={createTask}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}
