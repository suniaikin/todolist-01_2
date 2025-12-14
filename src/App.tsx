import "./App.css";
import { TodolistItem } from "./TodolistItem";
import type { Task } from "./TodolistItem";
import { v1 } from "uuid";

export function App() {
    const title_1 = "Waht to learn";
    const tasks_1: Task[] = [
        { id: v1(), title: "Panera Bread", isDone: true },
        { id: v1(), title: "Starbucks", isDone: false },
        { id: v1(), title: "Olive Garden", isDone: false },
    ];

    const title_2 = "How to run";
    const tasks_2: Task[] = [
        { id: v1(), title: "Fast", isDone: true },
        { id: v1(), title: "Slow", isDone: false },
        { id: v1(), title: "Jumping", isDone: false },
    ];

    return (
        <div className="App">
            <TodolistItem title={title_1} tasks={tasks_1} />
            <TodolistItem title={title_2} tasks={tasks_2} />
        </div>
    );
}

//     const deleteTask = (taskId: Task["id"]) => {
