import "./App.css";
import { TodolistItem } from "./TodolistItem";
import type { TaskProps } from "./Task";
import { v1 } from "uuid";

export function App() {
    const title_1 = "Waht to learn";
    const tasks_1: TaskProps[] = [
        { id: v1(), title: "Panera Bread", isDone: true },
        { id: v1(), title: "Starbucks", isDone: false },
        { id: v1(), title: "Olive Garden", isDone: false },
    ];

    const title_2 = "How to run";
    const tasks_2: TaskProps[] = [
        { id: v1(), title: "Fast", isDone: true },
        { id: v1(), title: "Slow", isDone: false },
        { id: v1(), title: "Jumping", isDone: false },
    ];
    const title_3 = "No tasks list";
        const tasks_3: TaskProps[] = [
            
        ];

    return (
        <div className="App">
            <TodolistItem title={title_1} tasks={tasks_1} />
            <TodolistItem title={title_2} tasks={tasks_2} />
            <TodolistItem title={title_3} tasks={tasks_3} />
        </div>
    );
}

