import "./App.css";
import { v1 } from "uuid";
import { TodolistItem } from "./TodolistItem.tsx";
import type { TaskProps } from "./types";
import { useState } from "react";
import type { FilterType } from "./types";
import { getFilteredTasks } from "./utilits.ts";


const title_1 = "What to learn";

export const App = () => {
    // BLL

    const [tasks, setTasks] = useState<TaskProps[]>([
        { id: v1(), title: "JS", isDone: false },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "AI", isDone: true },
        { id: v1(), title: "Redux", isDone: false },
    ]);

    const deleteTask = (taskId: TaskProps["id"]) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    };

    const createTask = (title: TaskProps["title"]) => {
        setTasks([...tasks, { id: v1(), title: title, isDone: false }]);
    };

    // UI

    const [filter, setFilter] = useState<FilterType>("all");
    const changeFilter = (filter: FilterType) => setFilter(filter);

    return (
        <div className="App">
            <TodolistItem
                title={title_1}
                tasks={getFilteredTasks(tasks, filter)}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
                createTask={createTask}
            />
        </div>
    );
};
