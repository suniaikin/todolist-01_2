import "./App.css";
import { TodolistItem } from "./TodolistItem";
import type { Task } from "./TodolistItem";
import { v1 } from "uuid";


export function App() {
    //BLL
//     const todolistTitle_1: string = "What to learn";

    const tasks: Task[] = [
        { id: v1(), title: "Panera Bread", isDone: true },
        { id: v1(), title: "Starbucks", isDone: false },
        { id: v1(), title: "Olive Garden", isDone: false },
    ];


    return (
        <div className="App">
            <TodolistItem title="What to learn" />
            <TodolistItem title="How to run" />
            <TodolistItem title="Where to go" />
        </div>
    );
}



//     const deleteTask = (taskId: Task["id"]) => {